"""
Interactive inpainting helper

Usage:
  python remove_cards_inpaint.py /path/to/image.jpg

Controls:
  - Left mouse button: paint mask (draw over areas to remove)
  - Right mouse button: erase mask
  - Press 'i' to run inpainting and show result
  - Press 's' to save the inpainted result to disk
  - Press 'm' to save the current mask to disk
  - Press 'r' to reset mask
  - Press 'q' to quit

Requires: opencv-python, numpy
Install: pip install opencv-python numpy
"""

import sys
import os
import cv2
import numpy as np


class InpaintEditor:
    def __init__(self, image_path):
        self.image_path = image_path
        self.image = cv2.imread(image_path)
        if self.image is None:
            raise FileNotFoundError(f"Could not open image: {image_path}")
        self.image_display = self.image.copy()
        self.mask = np.zeros(self.image.shape[:2], dtype=np.uint8)
        self.drawing = False
        self.brush_size = 20
        self.mode_draw = True
        self.window = 'inpaint'

    def _on_mouse(self, event, x, y, flags, param):
        if event == cv2.EVENT_LBUTTONDOWN:
            self.drawing = True
            self.mode_draw = True
            cv2.circle(self.mask, (x, y), self.brush_size, 255, -1)
            cv2.circle(self.image_display, (x, y), self.brush_size, (0, 0, 255), -1)
        elif event == cv2.EVENT_RBUTTONDOWN:
            self.drawing = True
            self.mode_draw = False
            cv2.circle(self.mask, (x, y), self.brush_size, 0, -1)
            # redraw display from original + mask overlay
            self._redraw_display()
        elif event == cv2.EVENT_MOUSEMOVE and self.drawing:
            if self.mode_draw:
                cv2.circle(self.mask, (x, y), self.brush_size, 255, -1)
                cv2.circle(self.image_display, (x, y), self.brush_size, (0, 0, 255), -1)
            else:
                cv2.circle(self.mask, (x, y), self.brush_size, 0, -1)
                self._redraw_display()
        elif event == cv2.EVENT_LBUTTONUP or event == cv2.EVENT_RBUTTONUP:
            self.drawing = False

    def _redraw_display(self):
        self.image_display = self.image.copy()
        overlay = self.image.copy()
        overlay[self.mask == 255] = (0, 0, 255)
        cv2.addWeighted(overlay, 0.4, self.image_display, 0.6, 0, self.image_display)

    def run(self):
        cv2.namedWindow(self.window, cv2.WINDOW_NORMAL)
        cv2.setMouseCallback(self.window, self._on_mouse)
        self._redraw_display()
        inpainted = None

        while True:
            cv2.imshow(self.window, self.image_display)
            key = cv2.waitKey(10) & 0xFF
            if key == ord('q'):
                break
            elif key == ord('r'):
                self.mask[:] = 0
                self._redraw_display()
            elif key == ord('m'):
                mask_path = self._out_path(suffix='_mask.png')
                cv2.imwrite(mask_path, self.mask)
                print('Saved mask to', mask_path)
            elif key == ord('i'):
                # run inpainting
                inpainted = cv2.inpaint(self.image, self.mask, 3, cv2.INPAINT_TELEA)
                cv2.imshow('inpainted', inpainted)
            elif key == ord('s'):
                if inpainted is None:
                    print('No inpaint result yet — press i to inpaint first')
                else:
                    out_path = self._out_path(suffix='_inpaint.png')
                    cv2.imwrite(out_path, inpainted)
                    print('Saved inpainted image to', out_path)
            elif key == ord('+') or key == ord('='):
                self.brush_size = min(200, self.brush_size + 5)
                print('Brush size', self.brush_size)
            elif key == ord('-'):
                self.brush_size = max(1, self.brush_size - 5)
                print('Brush size', self.brush_size)

        cv2.destroyAllWindows()

    def _out_path(self, suffix='_out.png'):
        base, ext = os.path.splitext(self.image_path)
        return base + suffix


def main():
    if len(sys.argv) < 2:
        print('Usage: python remove_cards_inpaint.py /path/to/image.jpg')
        sys.exit(1)
    path = sys.argv[1]
    editor = InpaintEditor(path)
    editor.run()


if __name__ == '__main__':
    main()
