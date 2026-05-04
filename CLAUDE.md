# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **San Viernes**, a coffee shop/restaurant located in Machala, Ecuador. The goal is a high-quality landing page with SEO, brand colors, and order links via PedidosYa.

## Key External Links

- **PedidosYa menu**: https://www.pedidosya.com.ec/restaurantes/machala/san-viernes-960d8690-6fb1-4c00-9128-f78662db631c-menu
- **Google Maps**: https://www.google.com/maps/place/San+Viernes/@-3.2556301,-79.9632539,17z

## Stack

Static HTML/CSS/JS — single `index.html`, no build step. Preview locally:
```bash
npx serve .
# or
python -m http.server 8080
```

## Brand Tokens

| Token | Value | Usage |
|---|---|---|
| `--orange` | `#FF6700` | "S" in logo, CTAs, accents |
| `--blue` | `#2B8FFF` | "v" + "San Viernes" text, secondary CTAs |
| `--black` | `#080808` | Background |
| `--surface` | `#141414` | Section backgrounds |
| Fonts | Syne 800 (headlines) + Inter (body) | Via Google Fonts |

Logo reads: **S** (orange) + **v** (blue) · "San Viernes" (blue) · "para compartir" (orange)

## Business Info

- **Tagline**: "Para compartir"
- **Founded**: 1995
- **Locations**:
  - Matriz: Av. 25 de Junio e./ Ayacucho y Santa Rosa
  - Sucursal: Av. Las Palmeras e./ Pasaje y Boyacá
- **Social**: @sanviernes.sv (FB, IG, WhatsApp, TikTok)
- **PedidosYa**: `https://www.pedidosya.com.ec/restaurantes/machala/san-viernes-960d8690-6fb1-4c00-9128-f78662db631c-menu`
- **Google Maps coords**: -3.2573382, -79.9606945

## Design System

- **Style**: Awwwards-level editorial dark — inspired by paputmenorca design.md pattern
- **Nav**: Floating pill navbar (centered, backdrop-blur)
- **Hero**: Split grid — left (text, black bg) / right (full-bleed photo)
- **Sections**: Large `01/02/03` index numbers, Syne 800 statement headlines
- **Menu**: Horizontal drag-scroll rail with magnetic-effect cards
- **Reviews**: Large pull-quote list with numbered rows
- **Interactions**: Custom cursor (dot + ring), magnetic buttons, scroll-reveal via IntersectionObserver
- **SEO**: Full Schema.org `FastFoodRestaurant`, Open Graph, canonical
