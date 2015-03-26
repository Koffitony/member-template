## WorldSkills Member template

This template can be used by WorldSkills Members for their website. The 
template is provided as static files and has to be integrated into a CMS 
(content management system) by the Members.

The template is based on [Bootstrap 3](http://getbootstrap.com/) and uses 
[jQuery](http://jquery.com).

### Files

- `index.html` Example template for the homepage
- `subpage1.html` Template for a subpage with a left sidebar navigation
- `subpage2.html` Template for a subpage page with two columns
- `subpage3.html` Template for a subpage with three columns and highlights
- `css`
  - `bootstrap.min.css` Minified CSS from Bootstrap
  - `custom.css` CSS file for customization by Member
  - `ie.css` Adjustements for Internet Explorer
  - `responsive.css` Responsive design directives
  - `site.css` Main design CSS
- `images`
  - `bgi` Images needed for the design
  - `examples` Various images used in the examples
- `js`
  - `bootstrap.min.js` Minified JavaScript from Bootstrap
  - `general.js` JavaScript for design interactions
  - `ie10-viewport-bug-workaround.js` IE10 viewport hack for Surface/desktop Windows 8 bug
  - `jquery.js` Minified version of jQuery.

### Colours

The colours of the template have been chosen for a random Member to illustrate 
how the design could look like. We encourage Members to adopt the template 
to their own branding and user their own colours.

### Fonts

For compability reasons the default font used is Helvetica Neue. The official 
WorldSkills font is Frutiger. Members can purchase a Web font license from 
[Linotype](http://www.linotype.com/) and integrate it as instructed by Linotype.
The following lines can be added in `css/custom.css`:

```css
body {
    font-family: "FrutigerLTW02-45Light", "Frutiger LT Com", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1 {
    font-family: "Frutiger LT W02 65 Bold", "Frutiger LT Com", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
}

h2,
h3 {
    font-family: "FrutigerLTW02-55Roman", "Frutiger LT Com", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
}
```

