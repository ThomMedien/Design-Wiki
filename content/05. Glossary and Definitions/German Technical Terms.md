---
title: German Technical Terms
---

# German Technical Terms (IHK-Prüfungsbegriffe)

This glossary compiles the essential German technical terminology required for both the written exams (*Gestaltung und Technik*) and the practical project documentation. The IHK expects exact usage of these terms.

---

## 1. Typography & Layout (Typografie & Layout)

### Satzspiegel (Grid / Print Space)
The active area on a page where text and images are placed. It is bounded by the margins (**Stege**):
*   **Kopfsteg:** Top margin.
*   **Fußsteg:** Bottom margin.
*   **Außensteg:** Outer margin (side facing away from the binding).
*   **Innensteg (Bundsteg):** Inner margin (side facing the binding; must account for binding thickness).

### Kolumnentitel (Running Header / Footer)
*   **Lebender Kolumnentitel:** A header that changes based on the page content (e.g., chapter names).
*   **Toter Kolumnentitel:** A header or footer that remains constant throughout the document (usually just the page number).

### Typographic Errors (Satzfehler)
*   **Hurenkind (Widow):** The final line of a paragraph appearing by itself at the very top of a new column or page. *This is a severe design error and must be avoided.*
*   **Schusterjunge (Orphan):** The first line of a paragraph appearing by itself at the bottom of a column or page. *Considered bad layout form.*
*   **Fliegenkopf (Turned Letter):** A printing term historically referencing a character turned upside down, now representing any placeholder block or missing glyph.

### Text Alignment (Satzarten)
*   **Blocksatz (Justified):** Text aligned to both the left and right margins. Requires careful word-spacing/hyphenation to avoid white vertical gaps known as "Gassen" (rivers).
*   **Linksbündiger Flattersatz (Flush Left):** Left-aligned text with an uneven right margin. Good for reading flow.
*   **Rechtsbündiger Flattersatz (Flush Right):** Right-aligned text. Used sparingly (e.g., marginalia).
*   **Zentrierter Satz (Centered):** Centered text around a middle axis. Used for invitations or headlines.

---

## 2. Print Prepress (Druckvorstufe)

### Beschnitt & Beschnittzugabe (Bleed)
The standard margin added to layouts (usually **3mm**) to prevent white edges (**Blitzer**) after the printed paper is cut to size. Elements that go to the edge of the page must extend into the bleed area.

![Print Design Margins](../03.%20Technical%20Production/print_margins_diagram.jpg)


### Ausschießen (Imposition)
The process of arranging pages on a large printing sheet so that they appear in the correct numerical order and orientation once the sheet is printed, folded, and cut.

```
Example of an 8-page imposition sheet (one side):
+------+------+------+------+
|  8   |  1   |  4   |  5   |  (Top row upside-down)
| (dn) | (dn) | (dn) | (dn) |
+------+------+------+------+
|  7   |  2   |  3   |  6   |  (Bottom row right side up)
+------+------+------+------+
```

### Passmarken (Printer Marks)
*   **Passkreuze (Register Marks):** Small crosses placed outside the printable area to align the individual CMYK printing plates precisely.
*   **Farbbalken (Color Bar):** A strip of color patches used by printers with a spectrophotometer to measure ink density and dot gain during the run.
*   **Falzmarken (Fold Marks):** Indicate where the paper sheet should be folded.

---

## 3. Printing Technology & Halftoning (Rastertechnik)

### Rasterweite (Screen Ruling)
The frequency of dots in halftone printing, measured in **L/cm** (lines per centimeter) or **LPI** (lines per inch). 
*   *Example:* A 60er Raster (60 L/cm or ~150 LPI) is the standard for high-quality offset printing on coated paper.

### Rasterwinkelung (Screen Angle)
The angle at which the halftone dot rows of each color are printed. Correct angles are crucial to prevent the **Moiré-Effekt** (undesirable interference patterns).
*   **Standard Offset Angles (IHK Convention):**
    *   **Cyan:** 15° (or 75°)
    *   **Magenta:** 75° (or 15°)
    *   **Gelb (Yellow):** 0° (or 90°) — the least visible color, placed at the most visible angle.
    *   **Schwarz (Key):** 45° — the most visible color, placed at the least distracting angle.

---

## 4. Digital & Images (Digital & Bildtechnik)

### Farbtiefe (Bit Depth)
The number of bits used to represent the color of a single pixel.
*   **1-Bit:** Line art / Bitmap (Schwarz/Weiß).
*   **8-Bit:** 256 levels per channel. Standard for RGB (8-bit x 3 channels = 24-bit, yielding ~16.7 million colors).
*   **16-Bit:** 65,536 levels per channel. Used for high-end editing in raw photo formats.

### Tonwertumfang (Tonal Range)
The span of tones between the darkest shadow (Tiefen) and the brightest highlight (Lichter) in an image.

### Interpolation
The software process of creating new pixels when resizing an image. Resizing up (Upsampling) duplicates pixels (causing blurriness), while resizing down (Downsampling) deletes pixels (requiring sharpening).
