---
name: Editorial Minimalism
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5a'
  on-secondary: '#ffffff'
  secondary-container: '#e3e3dc'
  on-secondary-container: '#636560'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e3dc'
  secondary-fixed-dim: '#c6c7c0'
  on-secondary-fixed: '#1a1c18'
  on-secondary-fixed-variant: '#464742'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 120px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: '600'
    lineHeight: 105%
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 120%
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0em
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 140%
    letterSpacing: 0.1em
  ui-button:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.02em
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is anchored in the concept of **Quiet Authority**. It is a high-end editorial framework designed for luxury, art, and architectural showcases. The aesthetic prioritizes restraint over ornamentation, using negative space as a functional element rather than a void.

The visual language is rooted in **Minimalism** with a focus on high-contrast geometry. It evokes the feeling of a printed archival monograph—permanent, deliberate, and sophisticated. The interface should feel secondary to the content, acting as a precise gallery frame that guides the user through a curated narrative experience.

## Colors

The palette is strictly limited to maintain a high-contrast, premium feel. The primary background is a Soft Cream (#F2F2EB), which reduces eye strain compared to pure white while providing a vintage, tactile quality similar to heavyweight paper.

Deep Black (#000000) is reserved for primary typography and structural elements, creating a sharp "ink on paper" effect. Grayscale accents are used sparingly for secondary information and ultra-fine borders, ensuring that the hierarchy remains focused on the core editorial content.

## Typography

This design system utilizes a high-contrast pairing of a sophisticated serif and a utilitarian sans-serif. **Newsreader** provides the authoritative, literary voice for headings, often used at massive scales to create graphic impact. Tight letter-spacing on large headings mimics traditional editorial typesetting.

**Work Sans** is used for all UI elements, navigation, and body copy. It is selected for its clarity and neutral character, providing a modern counterpoint to the traditional serif. Body text should maintain a generous line height (1.6) to ensure maximum legibility against the cream background.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centered within a maximum width of 1440px to control line lengths and composition precisely. A 12-column grid is used, with generous margins (64px) to create the "frame" effect essential to the brand personality.

Spacing follows a 4px base unit, but emphasizes large, dramatic gaps between sections (128px+) to force the user to pause and digest content. Elements should often be aligned to the grid with asymmetry—for example, a headline spanning 6 columns on the left, while the body text occupies only 4 columns on the right, leaving the remaining columns as "white space."

## Elevation & Depth

In this design system, depth is achieved through **structural layering and ultra-fine borders** rather than shadows. The system is intentionally flat to emphasize the geometric purity of the layout.

Visual hierarchy is conveyed via:
- **Ultra-fine borders:** 0.5pt or 1px lines in muted gray or black to separate content modules.
- **Tonal shifts:** Subtle use of pure white (#FFFFFF) containers on top of the soft cream (#F2F2EB) background for focused elements.
- **Graphic Scale:** Overlapping large typography over images or borders to create a layered "print" feel.
- **No Shadows:** Shadows are strictly prohibited to maintain the "quiet" and "sharp" aesthetic.

## Shapes

The shape language is strictly **Sharp (0px)**. All containers, buttons, and image frames must feature 90-degree corners. This reinforces the architectural and geometric nature of the design system. Rounding is seen as too "friendly" or "digital" for this specific editorial mood; sharp edges reflect the precision of high-end print design.

## Components

### Buttons
Buttons are strictly rectangular with 1px black borders. The default state is a transparent background with black text. The hover state involves a solid black fill with cream text. Label text is always in Work Sans Medium, often in all-caps.

### Inputs & Forms
Input fields are defined by a single 1px bottom border rather than a full box. Labels sit above the line in `label-caps`. Focus states shift the border color from light gray to deep black.

### Ultra-Fine Dividers
Used to separate sections within a page. These lines should span the full container or a specific number of grid columns. They are the primary tool for creating "restraint" and "structure."

### Cards
Editorial cards have no background or shadow. They consist of a sharp-edged image, a serif headline, and a small sans-serif meta-tag (e.g., "01 / ARCHIVE").

### Navigation
The header is minimalist, using `ui-button` styles. It is often fixed to the top with a 1px bottom border that disappears on scroll to keep the focus on content.