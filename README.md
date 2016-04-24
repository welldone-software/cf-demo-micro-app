<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="generator" content="Asciidoctor 1.5.4">
    <title>Getting Started with Codefresh</title>
    <style>
        @import url(http://red-hat-overpass-fonts.s3.amazonaws.com/overpass.css);
        /*! normalize.css v2.1.2 | MIT License | git.io/normalize */
        /* ========================================================================== HTML5 display definitions ========================================================================== */
        /** Correct `block` display not defined in IE 8/9. */
        article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
            display: block;
        }

        /** Correct `inline-block` display not defined in IE 8/9. */
        audio, canvas, video {
            display: inline-block;
        }

        /** Prevent modern browsers from displaying `audio` without controls. Remove excess height in iOS 5 devices. */
        audio:not([controls]) {
            display: none;
            height: 0;
        }

        /** Address `[hidden]` styling not present in IE 8/9. Hide the `template` element in IE, Safari, and Firefox < 22. */
        [hidden], template {
            display: none;
        }

        script {
            display: none !important;
        }

        /* ========================================================================== Base ========================================================================== */
        /** 1. Set default font family to sans-serif. 2. Prevent iOS text size adjust after orientation change, without disabling user zoom. */
        html {
            font-family: sans-serif; /* 1 */
            -ms-text-size-adjust: 100%; /* 2 */
            -webkit-text-size-adjust: 100%; /* 2 */
        }

        /** Remove default margin. */
        body {
            margin: 0;
        }

        /* ========================================================================== Links ========================================================================== */
        /** Remove the gray background color from active links in IE 10. */
        a {
            background: transparent;
        }

        /** Address `outline` inconsistency between Chrome and other browsers. */
        a:focus {
            outline: thin dotted;
        }

        /** Improve readability when focused and also mouse hovered in all browsers. */
        a:active, a:hover {
            outline: 0;
        }

        /* ========================================================================== Typography ========================================================================== */
        /** Address variable `h1` font-size and margin within `section` and `article` contexts in Firefox 4+, Safari 5, and Chrome. */
        h1 {
            font-size: 2em;
            margin: 0.67em 0;
        }

        /** Address styling not present in IE 8/9, Safari 5, and Chrome. */
        abbr[title] {
            border-bottom: 1px dotted;
        }

        /** Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome. */
        b, strong {
            font-weight: bold;
        }

        /** Address styling not present in Safari 5 and Chrome. */
        dfn {
            font-style: italic;
        }

        /** Address differences between Firefox and other browsers. */
        hr {
            -moz-box-sizing: content-box;
            box-sizing: content-box;
            height: 0;
        }

        /** Address styling not present in IE 8/9. */
        mark {
            background: #ff0;
            color: #000;
        }

        /** Correct font family set oddly in Safari 5 and Chrome. */
        code, kbd, pre, samp {
            font-family: monospace, serif;
            font-size: 1em;
        }

        /** Improve readability of pre-formatted text in all browsers. */
        pre {
            white-space: pre-wrap;
        }

        /** Set consistent quote types. */
        q {
            quotes: "\201C" "\201D" "\2018" "\2019";
        }

        /** Address inconsistent and variable font size in all browsers. */
        small {
            font-size: 80%;
        }

        /** Prevent `sub` and `sup` affecting `line-height` in all browsers. */
        sub, sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
        }

        sup {
            top: -0.5em;
        }

        sub {
            bottom: -0.25em;
        }

        /* ========================================================================== Embedded content ========================================================================== */
        /** Remove border when inside `a` element in IE 8/9. */
        img {
            border: 0;
        }

        /** Correct overflow displayed oddly in IE 9. */
        svg:not(:root) {
            overflow: hidden;
        }

        /* ========================================================================== Figures ========================================================================== */
        /** Address margin not present in IE 8/9 and Safari 5. */
        figure {
            margin: 0;
        }

        /* ========================================================================== Forms ========================================================================== */
        /** Define consistent border, margin, and padding. */
        fieldset {
            border: 1px solid #c0c0c0;
            margin: 0 2px;
            padding: 0.35em 0.625em 0.75em;
        }

        /** 1. Correct `color` not being inherited in IE 8/9. 2. Remove padding so people aren't caught out if they zero out fieldsets. */
        legend {
            border: 0; /* 1 */
            padding: 0; /* 2 */
        }

        /** 1. Correct font family not being inherited in all browsers. 2. Correct font size not being inherited in all browsers. 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome. */
        button, input, select, textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 2 */
            margin: 0; /* 3 */
        }

        /** Address Firefox 4+ setting `line-height` on `input` using `!important` in the UA stylesheet. */
        button, input {
            line-height: normal;
        }

        /** Address inconsistent `text-transform` inheritance for `button` and `select`. All other form control elements do not inherit `text-transform` values. Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+. Correct `select` style inheritance in Firefox 4+ and Opera. */
        button, select {
            text-transform: none;
        }

        /** 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio` and `video` controls. 2. Correct inability to style clickable `input` types in iOS. 3. Improve usability and consistency of cursor style between image-type `input` and others. */
        button, html input[type="button"], input[type="reset"], input[type="submit"] {
            -webkit-appearance: button; /* 2 */
            cursor: pointer; /* 3 */
        }

        /** Re-set default cursor for disabled elements. */
        button[disabled], html input[disabled] {
            cursor: default;
        }

        /** 1. Address box sizing set to `content-box` in IE 8/9. 2. Remove excess padding in IE 8/9. */
        input[type="checkbox"], input[type="radio"] {
            box-sizing: border-box; /* 1 */
            padding: 0; /* 2 */
        }

        /** 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome. 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome (include `-moz` to future-proof). */
        input[type="search"] {
            -webkit-appearance: textfield; /* 1 */
            -moz-box-sizing: content-box;
            -webkit-box-sizing: content-box; /* 2 */
            box-sizing: content-box;
        }

        /** Remove inner padding and search cancel button in Safari 5 and Chrome on OS X. */
        input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
        }

        /** Remove inner padding and border in Firefox 4+. */
        button::-moz-focus-inner, input::-moz-focus-inner {
            border: 0;
            padding: 0;
        }

        /** 1. Remove default vertical scrollbar in IE 8/9. 2. Improve readability and alignment in all browsers. */
        textarea {
            overflow: auto; /* 1 */
            vertical-align: top; /* 2 */
        }

        /* ========================================================================== Tables ========================================================================== */
        /** Remove most spacing between table cells. */
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        meta.foundation-mq-small {
            font-family: "only screen and (min-width: 768px)";
            width: 768px;
        }

        meta.foundation-mq-medium {
            font-family: "only screen and (min-width:1280px)";
            width: 1280px;
        }

        meta.foundation-mq-large {
            font-family: "only screen and (min-width:1440px)";
            width: 1440px;
        }

        *, *:before, *:after {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        html, body {
            font-size: 100%;
        }

        body {
            background: #e5e5e5;
            color: #222222;
            padding: 0;
            margin: 0;
            font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
            font-weight: normal;
            font-style: normal;
            line-height: 1;
            position: relative;
            cursor: auto;
        }

        a:hover {
            cursor: pointer;
        }

        img, object, embed {
            max-width: 100%;
            height: auto;
        }

        object, embed {
            height: 100%;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        #map_canvas img, #map_canvas embed, #map_canvas object, .map_canvas img, .map_canvas embed, .map_canvas object {
            max-width: none !important;
        }

        .left {
            float: left !important;
        }

        .right {
            float: right !important;
        }

        .text-left {
            text-align: left !important;
        }

        .text-right {
            text-align: right !important;
        }

        .text-center {
            text-align: center !important;
        }

        .text-justify {
            text-align: justify !important;
        }

        .hide {
            display: none;
        }

        .antialiased, body {
            -webkit-font-smoothing: antialiased;
        }

        img {
            display: inline-block;
            vertical-align: middle;
        }

        textarea {
            height: auto;
            min-height: 50px;
        }

        select {
            width: 100%;
        }

        object, svg {
            display: inline-block;
            vertical-align: middle;
        }

        .center {
            margin-left: auto;
            margin-right: auto;
        }

        .spread {
            width: 100%;
        }

        p.lead, .paragraph.lead > p, #preamble > .sectionbody > .paragraph:first-of-type p {
            font-size: 1.15625em;
            line-height: 1.6;
        }

        .subheader, .admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title {
            line-height: 1.4;
            color: #4d4d4d;
            font-weight: 300;
            margin-top: 0.2em;
            margin-bottom: 0.5em;
        }

        /* Typography resets */
        div, dl, dt, dd, ul, ol, li, h1, h2, h3, #toctitle, .sidebarblock > .content > .title, h4, h5, h6, pre, form, p, blockquote, th, td {
            margin: 0;
            padding: 0;
            direction: ltr;
        }

        /* Default Link Styles */
        a {
            color: #006699;
            text-decoration: none;
            line-height: inherit;
        }

        a:hover, a:focus {
            color: #ea0011;
        }

        a img {
            border: none;
        }

        /* Default paragraph styles */
        p {
            font-family: "Helvetica Neue", Helvetica, "Liberation Sans", Arial, sans-serif;
            font-weight: normal;
            font-size: 0.9375em;
            line-height: 1.4;
            margin-bottom: 1.375em;
            text-rendering: optimizeLegibility;
        }

        p aside {
            font-size: 0.875em;
            line-height: 1.35;
            font-style: italic;
        }

        /* Default header styles */
        h1, h2, h3, #toctitle, .sidebarblock > .content > .title, h4, h5, h6 {
            font-family: Overpass, "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: normal;
            font-style: normal;
            color: black;
            text-rendering: optimizeLegibility;
            margin-top: 1em;
            margin-bottom: 0.5em;
            line-height: 1.2125em;
        }

        h1 small, h2 small, h3 small, #toctitle small, .sidebarblock > .content > .title small, h4 small, h5 small, h6 small {
            font-size: 60%;
            color: #4d4d4d;
            line-height: 0;
        }

        h1 {
            font-size: 2.125em;
        }

        h2 {
            font-size: 1.6875em;
        }

        h3, #toctitle, .sidebarblock > .content > .title {
            font-size: 1.375em;
        }

        h4 {
            font-size: 1.125em;
        }

        h5 {
            font-size: 1.125em;
        }

        h6 {
            font-size: 1em;
        }

        hr {
            border: solid #dddddd;
            border-width: 1px 0 0;
            clear: both;
            margin: 1.25em 0 1.1875em;
            height: 0;
        }

        /* Helpful Typography Defaults */
        em, i {
            font-style: italic;
            line-height: inherit;
        }

        strong, b {
            font-weight: bold;
            line-height: inherit;
        }

        small {
            font-size: 60%;
            line-height: inherit;
        }

        code {
            font-family: Menlo, Monaco, "Liberation Mono", Consolas, monospace;
            font-weight: normal;
            color: #3b3b3b;
        }

        /* Lists */
        ul, ol, dl {
            font-size: 0.9375em;
            line-height: 1.4;
            margin-bottom: 1.375em;
            list-style-position: outside;
            font-family: "Helvetica Neue", Helvetica, "Liberation Sans", Arial, sans-serif;
        }

        ul, ol {
            margin-left: 1.625em;
        }

        ul.no-bullet, ol.no-bullet {
            margin-left: 1.625em;
        }

        /* Unordered Lists */
        ul li ul, ul li ol {
            margin-left: 1.25em;
            margin-bottom: 0;
            font-size: 1em; /* Override nested font-size change */
        }

        ul.square li ul, ul.circle li ul, ul.disc li ul {
            list-style: inherit;
        }

        ul.square {
            list-style-type: square;
        }

        ul.circle {
            list-style-type: circle;
        }

        ul.disc {
            list-style-type: disc;
        }

        ul.no-bullet {
            list-style: none;
        }

        /* Ordered Lists */
        ol li ul, ol li ol {
            margin-left: 1.25em;
            margin-bottom: 0;
        }

        /* Definition Lists */
        dl dt {
            margin-bottom: 0.3em;
            font-weight: bold;
        }

        dl dd {
            margin-bottom: 0.75em;
        }

        /* Abbreviations */
        abbr, acronym {
            text-transform: uppercase;
            font-size: 90%;
            color: #404040;
            border-bottom: 1px dotted #dddddd;
            cursor: help;
        }

        abbr {
            text-transform: none;
        }

        /* Blockquotes */
        blockquote {
            margin: 0 0 1.375em;
            padding: 0 0 0 1em;
            border-left: 5px solid #ededed;
        }

        blockquote cite {
            display: block;
            font-size: 0.8125em;
            color: #333333;
        }

        blockquote cite:before {
            content: "\2014 \0020";
        }

        blockquote cite a, blockquote cite a:visited {
            color: #333333;
        }

        blockquote, blockquote p {
            line-height: 1.4;
            color: #404040;
        }

        /* Microformats */
        .vcard {
            display: inline-block;
            margin: 0 0 1.25em 0;
            border: 1px solid #dddddd;
            padding: 0.625em 0.75em;
        }

        .vcard li {
            margin: 0;
            display: block;
        }

        .vcard .fn {
            font-weight: bold;
            font-size: 0.9375em;
        }

        .vevent .summary {
            font-weight: bold;
        }

        .vevent abbr {
            cursor: auto;
            text-decoration: none;
            font-weight: bold;
            border: none;
            padding: 0 0.0625em;
        }

        @media only screen and (min-width: 768px) {
            h1, h2, h3, #toctitle, .sidebarblock > .content > .title, h4, h5, h6 {
                line-height: 1.4;
            }

            h1 {
                font-size: 2.75em;
            }

            h2 {
                font-size: 2.3125em;
            }

            h3, #toctitle, .sidebarblock > .content > .title {
                font-size: 1.6875em;
            }

            h4 {
                font-size: 1.4375em;
            }
        }

        /* Tables */
        table {
            background: white;
            margin-bottom: 1.25em;
            border: solid 1px #dddddd;
        }

        table thead, table tfoot {
            background: whitesmoke;
            font-weight: bold;
        }

        table thead tr th, table thead tr td, table tfoot tr th, table tfoot tr td {
            padding: 0.5em 0.625em 0.625em;
            font-size: inherit;
            color: #222222;
            text-align: left;
        }

        table tr th, table tr td {
            padding: 0.5625em 0.625em;
            font-size: inherit;
            color: #222222;
        }

        table tr.even, table tr.alt, table tr:nth-of-type(even) {
            background: #f9f9f9;
        }

        table thead tr th, table tfoot tr th, table tbody tr td, table tr td, table tfoot tr td {
            display: table-cell;
            line-height: 1.4;
        }

        body {
            tab-size: 4;
        }

        h1, h2, h3, #toctitle, .sidebarblock > .content > .title, h4, h5, h6 {
            line-height: 1.4;
        }

        a:hover, a:focus {
            text-decoration: underline;
        }

        .clearfix:before, .clearfix:after, .float-group:before, .float-group:after {
            content: " ";
            display: table;
        }

        .clearfix:after, .float-group:after {
            clear: both;
        }

        *:not(pre) > code {
            font-size: 0.9375em;
            font-style: normal !important;
            letter-spacing: 0;
            padding: 1px 4px;
            background-color: #eff1f1;
            border: 1px solid #d4d9d9;
            -webkit-border-radius: 0;
            border-radius: 0;
            line-height: inherit;
        }

        pre, pre > code {
            line-height: 1.6;
            color: #3b3b3b;
            font-family: Menlo, Monaco, "Liberation Mono", Consolas, monospace;
            font-weight: normal;
        }

        .keyseq {
            color: #737373;
        }

        kbd {
            font-family: Menlo, Monaco, "Liberation Mono", Consolas, monospace;
            display: inline-block;
            color: #404040;
            font-size: 0.65em;
            line-height: 1.45;
            background-color: #f7f7f7;
            border: 1px solid #ccc;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em white inset;
            box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 0.1em white inset;
            margin: 0 0.15em;
            padding: 0.2em 0.5em;
            vertical-align: middle;
            position: relative;
            top: -0.1em;
            white-space: nowrap;
        }

        .keyseq kbd:first-child {
            margin-left: 0;
        }

        .keyseq kbd:last-child {
            margin-right: 0;
        }

        .menuseq, .menu {
            color: #272727;
        }

        b.button:before, b.button:after {
            position: relative;
            top: -1px;
            font-weight: normal;
        }

        b.button:before {
            content: "[";
            padding: 0 3px 0 2px;
        }

        b.button:after {
            content: "]";
            padding: 0 2px 0 3px;
        }

        #header, #content, #footnotes, #footer {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            margin-bottom: 0;
            max-width: 62.5em;
            *zoom: 1;
            position: relative;
            padding-left: 0.9375em;
            padding-right: 0.9375em;
        }

        #header:before, #header:after, #content:before, #content:after, #footnotes:before, #footnotes:after, #footer:before, #footer:after {
            content: " ";
            display: table;
        }

        #header:after, #content:after, #footnotes:after, #footer:after {
            clear: both;
        }

        #content {
            margin-top: 1.25em;
        }

        #content:before {
            content: none;
        }

        #header > h1:first-child {
            color: black;
            margin-top: 2.25rem;
            margin-bottom: 0;
        }

        #header > h1:first-child + #toc {
            margin-top: 8px;
            border-top: 1px solid #dddddd;
        }

        #header > h1:only-child, body.toc2 #header > h1:nth-last-child(2) {
            border-bottom: 1px solid #dddddd;
            padding-bottom: 8px;
        }

        #header .details {
            border-bottom: 1px solid #dddddd;
            line-height: 1.45;
            padding-top: 0.25em;
            padding-bottom: 0.25em;
            padding-left: 0.25em;
            color: #333333;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-flow: row wrap;
            -webkit-flex-flow: row wrap;
            flex-flow: row wrap;
        }

        #header .details span:first-child {
            margin-left: -0.125em;
        }

        #header .details span.email a {
            color: #404040;
        }

        #header .details br {
            display: none;
        }

        #header .details br + span:before {
            content: "\00a0\2013\00a0";
        }

        #header .details br + span.author:before {
            content: "\00a0\22c5\00a0";
            color: #404040;
        }

        #header .details br + span#revremark:before {
            content: "\00a0|\00a0";
        }

        #header #revnumber {
            text-transform: capitalize;
        }

        #header #revnumber:after {
            content: "\00a0";
        }

        #content > h1:first-child:not([class]) {
            color: black;
            border-bottom: 1px solid #dddddd;
            padding-bottom: 8px;
            margin-top: 0;
            padding-top: 1rem;
            margin-bottom: 1.25rem;
        }

        #toc {
            border-bottom: 0 solid #dddddd;
            padding-bottom: 0.5em;
        }

        #toc > ul {
            margin-left: 0.125em;
        }

        #toc ul.sectlevel0 > li > a {
            font-style: italic;
        }

        #toc ul.sectlevel0 ul.sectlevel1 {
            margin: 0.5em 0;
        }

        #toc ul {
            font-family: Overpass, "Helvetica Neue", Helvetica, Arial, sans-serif;
            list-style-type: none;
        }

        #toc li {
            line-height: 1.3334;
            margin-top: 0.3334em;
        }

        #toc a {
            text-decoration: none;
        }

        #toc a:active {
            text-decoration: underline;
        }

        #toctitle {
            color: #4d4d4d;
            font-size: 1.2em;
        }

        @media only screen and (min-width: 768px) {
            #toctitle {
                font-size: 1.375em;
            }

            body.toc2 {
                padding-left: 15em;
                padding-right: 0;
            }

            #toc.toc2 {
                margin-top: 0 !important;
                background-color: #e5e5e5;
                position: fixed;
                width: 15em;
                left: 0;
                top: 0;
                border-right: 1px solid #dddddd;
                border-top-width: 0 !important;
                border-bottom-width: 0 !important;
                z-index: 1000;
                padding: 1.25em 1em;
                height: 100%;
                overflow: auto;
            }

            #toc.toc2 #toctitle {
                margin-top: 0;
                margin-bottom: 0.8rem;
                font-size: 1.2em;
            }

            #toc.toc2 > ul {
                font-size: 0.9em;
                margin-bottom: 0;
            }

            #toc.toc2 ul ul {
                margin-left: 0;
                padding-left: 1em;
            }

            #toc.toc2 ul.sectlevel0 ul.sectlevel1 {
                padding-left: 0;
                margin-top: 0.5em;
                margin-bottom: 0.5em;
            }

            body.toc2.toc-right {
                padding-left: 0;
                padding-right: 15em;
            }

            body.toc2.toc-right #toc.toc2 {
                border-right-width: 0;
                border-left: 1px solid #dddddd;
                left: auto;
                right: 0;
            }
        }

        @media only screen and (min-width: 1280px) {
            body.toc2 {
                padding-left: 20em;
                padding-right: 0;
            }

            #toc.toc2 {
                width: 20em;
            }

            #toc.toc2 #toctitle {
                font-size: 1.375em;
            }

            #toc.toc2 > ul {
                font-size: 0.95em;
            }

            #toc.toc2 ul ul {
                padding-left: 1.25em;
            }

            body.toc2.toc-right {
                padding-left: 0;
                padding-right: 20em;
            }
        }

        #content #toc {
            border-style: solid;
            border-width: 1px;
            border-color: #cccccc;
            margin-bottom: 1.25em;
            padding: 1.25em;
            background: #e5e5e5;
            -webkit-border-radius: 0;
            border-radius: 0;
        }

        #content #toc > :first-child {
            margin-top: 0;
        }

        #content #toc > :last-child {
            margin-bottom: 0;
        }

        #footer {
            max-width: 100%;
            background-color: white;
            padding: 1.25em;
        }

        #footer-text {
            color: #666666;
            line-height: 1.26;
        }

        .sect1 {
            padding-bottom: 0.625em;
        }

        @media only screen and (min-width: 768px) {
            .sect1 {
                padding-bottom: 1.25em;
            }
        }

        .sect1 + .sect1 {
            border-top: 0 solid #dddddd;
        }

        #content h1 > a.anchor, h2 > a.anchor, h3 > a.anchor, #toctitle > a.anchor, .sidebarblock > .content > .title > a.anchor, h4 > a.anchor, h5 > a.anchor, h6 > a.anchor {
            position: absolute;
            z-index: 1001;
            width: 1.5ex;
            margin-left: -1.5ex;
            display: block;
            text-decoration: none !important;
            visibility: hidden;
            text-align: center;
            font-weight: normal;
        }

        #content h1 > a.anchor:before, h2 > a.anchor:before, h3 > a.anchor:before, #toctitle > a.anchor:before, .sidebarblock > .content > .title > a.anchor:before, h4 > a.anchor:before, h5 > a.anchor:before, h6 > a.anchor:before {
            content: "\00A7";
            font-size: 0.85em;
            display: block;
            padding-top: 0.1em;
        }

        #content h1:hover > a.anchor, #content h1 > a.anchor:hover, h2:hover > a.anchor, h2 > a.anchor:hover, h3:hover > a.anchor, #toctitle:hover > a.anchor, .sidebarblock > .content > .title:hover > a.anchor, h3 > a.anchor:hover, #toctitle > a.anchor:hover, .sidebarblock > .content > .title > a.anchor:hover, h4:hover > a.anchor, h4 > a.anchor:hover, h5:hover > a.anchor, h5 > a.anchor:hover, h6:hover > a.anchor, h6 > a.anchor:hover {
            visibility: visible;
        }

        #content h1 > a.link, h2 > a.link, h3 > a.link, #toctitle > a.link, .sidebarblock > .content > .title > a.link, h4 > a.link, h5 > a.link, h6 > a.link {
            color: black;
            text-decoration: none;
        }

        #content h1 > a.link:hover, h2 > a.link:hover, h3 > a.link:hover, #toctitle > a.link:hover, .sidebarblock > .content > .title > a.link:hover, h4 > a.link:hover, h5 > a.link:hover, h6 > a.link:hover {
            color: black;
        }

        .audioblock, .imageblock, .literalblock, .listingblock, .stemblock, .videoblock {
            margin-bottom: 1.25em;
        }

        .admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title {
            text-rendering: optimizeLegibility;
            text-align: left;
        }

        table.tableblock > caption.title {
            white-space: nowrap;
            overflow: visible;
            max-width: 0;
        }

        .paragraph.lead > p, #preamble > .sectionbody > .paragraph:first-of-type p {
            color: black;
        }

        table.tableblock #preamble > .sectionbody > .paragraph:first-of-type p {
            font-size: inherit;
        }

        .admonitionblock > table {
            border-collapse: separate;
            border: 0;
            background: none;
            width: 100%;
        }

        .admonitionblock > table td.icon {
            text-align: center;
            width: 80px;
        }

        .admonitionblock > table td.icon img {
            max-width: none;
        }

        .admonitionblock > table td.icon .title {
            font-weight: bold;
            font-family: Overpass, "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        .admonitionblock > table td.content {
            padding-left: 1.125em;
            padding-right: 1.25em;
            border-left: 1px solid #dddddd;
            color: #333333;
        }

        .admonitionblock > table td.content > :last-child > :last-child {
            margin-bottom: 0;
        }

        .exampleblock > .content {
            border-style: solid;
            border-width: 1px;
            border-color: #cccccc;
            margin-bottom: 1.25em;
            padding: 1.25em;
            background: #e5e5e5;
            -webkit-border-radius: 0;
            border-radius: 0;
        }

        .exampleblock > .content > :first-child {
            margin-top: 0;
        }

        .exampleblock > .content > :last-child {
            margin-bottom: 0;
        }

        .sidebarblock {
            border-style: solid;
            border-width: 1px;
            border-color: #cccccc;
            margin-bottom: 1.25em;
            padding: 1.25em;
            background: #e5e5e5;
            -webkit-border-radius: 0;
            border-radius: 0;
        }

        .sidebarblock > :first-child {
            margin-top: 0;
        }

        .sidebarblock > :last-child {
            margin-bottom: 0;
        }

        .sidebarblock > .content > .title {
            color: #4d4d4d;
            margin-top: 0;
        }

        .exampleblock > .content > :last-child > :last-child, .exampleblock > .content .olist > ol > li:last-child > :last-child, .exampleblock > .content .ulist > ul > li:last-child > :last-child, .exampleblock > .content .qlist > ol > li:last-child > :last-child, .sidebarblock > .content > :last-child > :last-child, .sidebarblock > .content .olist > ol > li:last-child > :last-child, .sidebarblock > .content .ulist > ul > li:last-child > :last-child, .sidebarblock > .content .qlist > ol > li:last-child > :last-child {
            margin-bottom: 0;
        }

        .literalblock pre, .listingblock pre:not(.highlight), .listingblock pre[class="highlight"], .listingblock pre[class^="highlight "], .listingblock pre.CodeRay, .listingblock pre.prettyprint {
            background: #eff1f1;
        }

        .sidebarblock .literalblock pre, .sidebarblock .listingblock pre:not(.highlight), .sidebarblock .listingblock pre[class="highlight"], .sidebarblock .listingblock pre[class^="highlight "], .sidebarblock .listingblock pre.CodeRay, .sidebarblock .listingblock pre.prettyprint {
            background: #f2f1f1;
        }

        .literalblock pre, .literalblock pre[class], .listingblock pre, .listingblock pre[class] {
            border: 0 0 0 2px solid rgba(120, 120, 120, 0.35);
            -webkit-border-radius: 0;
            border-radius: 0;
            word-wrap: break-word;
            padding: 1em 1.5em 0.875em 1.5em;
            font-size: 0.8125em;
        }

        .literalblock pre.nowrap, .literalblock pre[class].nowrap, .listingblock pre.nowrap, .listingblock pre[class].nowrap {
            overflow-x: auto;
            white-space: pre;
            word-wrap: normal;
        }

        @media only screen and (min-width: 768px) {
            .literalblock pre, .literalblock pre[class], .listingblock pre, .listingblock pre[class] {
                font-size: 0.90625em;
            }
        }

        @media only screen and (min-width: 1280px) {
            .literalblock pre, .literalblock pre[class], .listingblock pre, .listingblock pre[class] {
                font-size: 1em;
            }
        }

        .literalblock.output pre {
            color: #eff1f1;
            background-color: #3b3b3b;
        }

        .listingblock pre.highlightjs {
            padding: 0;
        }

        .listingblock pre.highlightjs > code {
            padding: 1em 1.5em 0.875em 1.5em;
            -webkit-border-radius: 0;
            border-radius: 0;
        }

        .listingblock > .content {
            position: relative;
        }

        .listingblock code[data-lang]:before {
            display: none;
            content: attr(data-lang);
            position: absolute;
            font-size: 0.75em;
            top: 0.425rem;
            right: 0.5rem;
            line-height: 1;
            text-transform: uppercase;
            color: #999;
        }

        .listingblock:hover code[data-lang]:before {
            display: block;
        }

        .listingblock.terminal pre .command:before {
            content: attr(data-prompt);
            padding-right: 0.5em;
            color: #999;
        }

        .listingblock.terminal pre .command:not([data-prompt]):before {
            content: "$";
        }

        table.pyhltable {
            border-collapse: separate;
            border: 0;
            margin-bottom: 0;
            background: none;
        }

        table.pyhltable td {
            vertical-align: top;
            padding-top: 0;
            padding-bottom: 0;
            line-height: 1.6;
        }

        table.pyhltable td.code {
            padding-left: .75em;
            padding-right: 0;
        }

        pre.pygments .lineno, table.pyhltable td:not(.code) {
            color: #999;
            padding-left: 0;
            padding-right: .5em;
            border-right: 1px solid #dddddd;
        }

        pre.pygments .lineno {
            display: inline-block;
            margin-right: .25em;
        }

        table.pyhltable .linenodiv {
            background: none !important;
            padding-right: 0 !important;
        }

        .quoteblock {
            margin: 0 1em 1.375em 1.5em;
            display: table;
        }

        .quoteblock > .title {
            margin-left: -1.5em;
            margin-bottom: 0.75em;
        }

        .quoteblock blockquote, .quoteblock blockquote p {
            color: #404040;
            font-size: 1.15rem;
            line-height: 1.75;
            word-spacing: 0.1em;
            letter-spacing: 0;
            font-style: italic;
            text-align: justify;
        }

        .quoteblock blockquote {
            margin: 0;
            padding: 0;
            border: 0;
        }

        .quoteblock blockquote:before {
            content: "\201c";
            float: left;
            font-size: 2.75em;
            font-weight: bold;
            line-height: 0.6em;
            margin-left: -0.6em;
            color: #4d4d4d;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .quoteblock blockquote > .paragraph:last-child p {
            margin-bottom: 0;
        }

        .quoteblock .attribution {
            margin-top: 0.5em;
            margin-right: 0.5ex;
            text-align: right;
        }

        .quoteblock .quoteblock {
            margin-left: 0;
            margin-right: 0;
            padding: 0.5em 0;
            border-left: 3px solid #333333;
        }

        .quoteblock .quoteblock blockquote {
            padding: 0 0 0 0.75em;
        }

        .quoteblock .quoteblock blockquote:before {
            display: none;
        }

        .verseblock {
            margin: 0 1em 1.375em 1em;
        }

        .verseblock pre {
            font-family: "Open Sans", "DejaVu Sans", sans;
            font-size: 1.15rem;
            color: #404040;
            font-weight: 300;
            text-rendering: optimizeLegibility;
        }

        .verseblock pre strong {
            font-weight: 400;
        }

        .verseblock .attribution {
            margin-top: 1.25rem;
            margin-left: 0.5ex;
        }

        .quoteblock .attribution, .verseblock .attribution {
            font-size: 0.8125em;
            line-height: 1.45;
            font-style: italic;
        }

        .quoteblock .attribution br, .verseblock .attribution br {
            display: none;
        }

        .quoteblock .attribution cite, .verseblock .attribution cite {
            display: block;
            letter-spacing: -0.025em;
            color: #333333;
        }

        .quoteblock.abstract {
            margin: 0 0 1.375em 0;
            display: block;
        }

        .quoteblock.abstract blockquote, .quoteblock.abstract blockquote p {
            text-align: left;
            word-spacing: 0;
        }

        .quoteblock.abstract blockquote:before, .quoteblock.abstract blockquote p:first-of-type:before {
            display: none;
        }

        table.tableblock {
            max-width: 100%;
            border-collapse: separate;
        }

        table.tableblock td > .paragraph:last-child p > p:last-child, table.tableblock th > p:last-child, table.tableblock td > p:last-child {
            margin-bottom: 0;
        }

        table.tableblock, th.tableblock, td.tableblock {
            border: 0 solid #dddddd;
        }

        table.grid-all th.tableblock, table.grid-all td.tableblock {
            border-width: 0 1px 1px 0;
        }

        table.grid-all tfoot > tr > th.tableblock, table.grid-all tfoot > tr > td.tableblock {
            border-width: 1px 1px 0 0;
        }

        table.grid-cols th.tableblock, table.grid-cols td.tableblock {
            border-width: 0 1px 0 0;
        }

        table.grid-all * > tr > .tableblock:last-child, table.grid-cols * > tr > .tableblock:last-child {
            border-right-width: 0;
        }

        table.grid-rows th.tableblock, table.grid-rows td.tableblock {
            border-width: 0 0 1px 0;
        }

        table.grid-all tbody > tr:last-child > th.tableblock, table.grid-all tbody > tr:last-child > td.tableblock, table.grid-all thead:last-child > tr > th.tableblock, table.grid-rows tbody > tr:last-child > th.tableblock, table.grid-rows tbody > tr:last-child > td.tableblock, table.grid-rows thead:last-child > tr > th.tableblock {
            border-bottom-width: 0;
        }

        table.grid-rows tfoot > tr > th.tableblock, table.grid-rows tfoot > tr > td.tableblock {
            border-width: 1px 0 0 0;
        }

        table.frame-all {
            border-width: 1px;
        }

        table.frame-sides {
            border-width: 0 1px;
        }

        table.frame-topbot {
            border-width: 1px 0;
        }

        th.halign-left, td.halign-left {
            text-align: left;
        }

        th.halign-right, td.halign-right {
            text-align: right;
        }

        th.halign-center, td.halign-center {
            text-align: center;
        }

        th.valign-top, td.valign-top {
            vertical-align: top;
        }

        th.valign-bottom, td.valign-bottom {
            vertical-align: bottom;
        }

        th.valign-middle, td.valign-middle {
            vertical-align: middle;
        }

        table thead th, table tfoot th {
            font-weight: bold;
        }

        tbody tr th {
            display: table-cell;
            line-height: 1.4;
            background: whitesmoke;
        }

        tbody tr th, tbody tr th p, tfoot tr th, tfoot tr th p {
            color: #222222;
            font-weight: bold;
        }

        p.tableblock > code:only-child {
            background: none;
            padding: 0;
        }

        p.tableblock {
            font-size: 1em;
        }

        td > div.verse {
            white-space: pre;
        }

        ol {
            margin-left: 1.875em;
        }

        ul li ol {
            margin-left: 1.625em;
        }

        dl dd {
            margin-left: 2em;
        }

        dl dd:last-child, dl dd:last-child > :last-child {
            margin-bottom: 0;
        }

        ol > li p, ul > li p, ul dd, ol dd, .olist .olist, .ulist .ulist, .ulist .olist, .olist .ulist {
            margin-bottom: 0.6875em;
        }

        ul.unstyled, ol.unnumbered, ul.checklist, ul.none {
            list-style-type: none;
        }

        ul.unstyled, ol.unnumbered, ul.checklist {
            margin-left: 0.625em;
        }

        ul.checklist li > p:first-child > .fa-square-o:first-child, ul.checklist li > p:first-child > .fa-check-square-o:first-child {
            width: 1em;
            font-size: 0.85em;
        }

        ul.checklist li > p:first-child > input[type="checkbox"]:first-child {
            width: 1em;
            position: relative;
            top: 1px;
        }

        ul.inline {
            margin: 0 auto 0.6875em auto;
            margin-left: -1.375em;
            margin-right: 0;
            padding: 0;
            list-style: none;
            overflow: hidden;
        }

        ul.inline > li {
            list-style: none;
            float: left;
            margin-left: 1.375em;
            display: block;
        }

        ul.inline > li > * {
            display: block;
        }

        .unstyled dl dt {
            font-weight: normal;
            font-style: normal;
        }

        ol.arabic {
            list-style-type: decimal;
        }

        ol.decimal {
            list-style-type: decimal-leading-zero;
        }

        ol.loweralpha {
            list-style-type: lower-alpha;
        }

        ol.upperalpha {
            list-style-type: upper-alpha;
        }

        ol.lowerroman {
            list-style-type: lower-roman;
        }

        ol.upperroman {
            list-style-type: upper-roman;
        }

        ol.lowergreek {
            list-style-type: lower-greek;
        }

        .hdlist > table, .colist > table {
            border: 0;
            background: none;
        }

        .hdlist > table > tbody > tr, .colist > table > tbody > tr {
            background: none;
        }

        td.hdlist1, td.hdlist2 {
            vertical-align: top;
            padding: 0 0.625em;
        }

        td.hdlist1 {
            font-weight: bold;
            padding-bottom: 1.375em;
        }

        .literalblock + .colist, .listingblock + .colist {
            margin-top: -0.5em;
        }

        .colist > table tr > td:first-of-type {
            padding: 0 0.75em;
            line-height: 1;
        }

        .colist > table tr > td:last-of-type {
            padding: 0.25em 0;
        }

        .thumb, .th {
            line-height: 0;
            display: inline-block;
            border: solid 4px white;
            -webkit-box-shadow: 0 0 0 1px #dddddd;
            box-shadow: 0 0 0 1px #dddddd;
        }

        .imageblock.left, .imageblock[style*="float: left"] {
            margin: 0.25em 0.625em 1.25em 0;
        }

        .imageblock.right, .imageblock[style*="float: right"] {
            margin: 0.25em 0 1.25em 0.625em;
        }

        .imageblock > .title {
            margin-bottom: 0;
        }

        .imageblock.thumb, .imageblock.th {
            border-width: 6px;
        }

        .imageblock.thumb > .title, .imageblock.th > .title {
            padding: 0 0.125em;
        }

        .image.left, .image.right {
            margin-top: 0.25em;
            margin-bottom: 0.25em;
            display: inline-block;
            line-height: 0;
        }

        .image.left {
            margin-right: 0.625em;
        }

        .image.right {
            margin-left: 0.625em;
        }

        a.image {
            text-decoration: none;
            display: inline-block;
        }

        a.image object {
            pointer-events: none;
        }

        sup.footnote, sup.footnoteref {
            font-size: 0.875em;
            position: static;
            vertical-align: super;
        }

        sup.footnote a, sup.footnoteref a {
            text-decoration: none;
        }

        sup.footnote a:active, sup.footnoteref a:active {
            text-decoration: underline;
        }

        #footnotes {
            padding-top: 0.75em;
            padding-bottom: 0.75em;
            margin-bottom: 0.625em;
        }

        #footnotes hr {
            width: 20%;
            min-width: 6.25em;
            margin: -0.25em 0 0.75em 0;
            border-width: 1px 0 0 0;
        }

        #footnotes .footnote {
            padding: 0 0.375em 0 0.225em;
            line-height: 1.3334;
            font-size: 0.875em;
            margin-left: 1.2em;
            text-indent: -1.05em;
            margin-bottom: 0.2em;
        }

        #footnotes .footnote a:first-of-type {
            font-weight: bold;
            text-decoration: none;
        }

        #footnotes .footnote:last-of-type {
            margin-bottom: 0;
        }

        #content #footnotes {
            margin-top: -0.625em;
            margin-bottom: 0;
            padding: 0.75em 0;
        }

        .gist .file-data > table {
            border: 0;
            background: #fff;
            width: 100%;
            margin-bottom: 0;
        }

        .gist .file-data > table td.line-data {
            width: 99%;
        }

        div.unbreakable {
            page-break-inside: avoid;
        }

        .big {
            font-size: larger;
        }

        .small {
            font-size: smaller;
        }

        .underline {
            text-decoration: underline;
        }

        .overline {
            text-decoration: overline;
        }

        .line-through {
            text-decoration: line-through;
        }

        .aqua {
            color: #00bfbf;
        }

        .aqua-background {
            background-color: #00fafa;
        }

        .black {
            color: black;
        }

        .black-background {
            background-color: black;
        }

        .blue {
            color: #0000bf;
        }

        .blue-background {
            background-color: #0000fa;
        }

        .fuchsia {
            color: #bf00bf;
        }

        .fuchsia-background {
            background-color: #fa00fa;
        }

        .gray {
            color: #606060;
        }

        .gray-background {
            background-color: #7d7d7d;
        }

        .green {
            color: #006000;
        }

        .green-background {
            background-color: #007d00;
        }

        .lime {
            color: #00bf00;
        }

        .lime-background {
            background-color: #00fa00;
        }

        .maroon {
            color: #600000;
        }

        .maroon-background {
            background-color: #7d0000;
        }

        .navy {
            color: #000060;
        }

        .navy-background {
            background-color: #00007d;
        }

        .olive {
            color: #606000;
        }

        .olive-background {
            background-color: #7d7d00;
        }

        .purple {
            color: #600060;
        }

        .purple-background {
            background-color: #7d007d;
        }

        .red {
            color: #bf0000;
        }

        .red-background {
            background-color: #fa0000;
        }

        .silver {
            color: #909090;
        }

        .silver-background {
            background-color: #bcbcbc;
        }

        .teal {
            color: #006060;
        }

        .teal-background {
            background-color: #007d7d;
        }

        .white {
            color: #bfbfbf;
        }

        .white-background {
            background-color: #fafafa;
        }

        .yellow {
            color: #bfbf00;
        }

        .yellow-background {
            background-color: #fafa00;
        }

        span.icon > .fa {
            cursor: default;
        }

        .admonitionblock td.icon [class^="fa icon-"] {
            font-size: 2.5em;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            cursor: default;
        }

        .admonitionblock td.icon .icon-note:before {
            content: "\f05a";
            color: #004c73;
        }

        .admonitionblock td.icon .icon-tip:before {
            content: "\f0eb";
            text-shadow: 1px 1px 2px rgba(155, 155, 0, 0.8);
            color: #111;
        }

        .admonitionblock td.icon .icon-warning:before {
            content: "\f071";
            color: #bf6900;
        }

        .admonitionblock td.icon .icon-caution:before {
            content: "\f06d";
            color: #bf3400;
        }

        .admonitionblock td.icon .icon-important:before {
            content: "\f06a";
            color: #bf0000;
        }

        .conum[data-value] {
            display: inline-block;
            color: #fff !important;
            background-color: #404040;
            -webkit-border-radius: 100px;
            border-radius: 100px;
            text-align: center;
            font-size: 0.75em;
            width: 1.67em;
            height: 1.67em;
            line-height: 1.67em;
            font-family: "Open Sans", "DejaVu Sans", sans-serif;
            font-style: normal;
            font-weight: bold;
        }

        .conum[data-value] * {
            color: #fff !important;
        }

        .conum[data-value] + b {
            display: none;
        }

        .conum[data-value]:after {
            content: attr(data-value);
        }

        pre .conum[data-value] {
            position: relative;
            top: -0.125em;
        }

        b.conum * {
            color: inherit !important;
        }

        .conum:not([data-value]):empty {
            display: none;
        }

        #header, #content, #footnotes {
            background: white;
            padding-left: 2.5em;
            padding-right: 2.5em;
        }

        #header {
            margin-bottom: 0;
        }

        #header > h1 {
            border-bottom: none;
        }

        .literalblock pre, .listingblock pre {
            background: #eff1f1;
        }

        #footnotes {
            margin-bottom: 2em;
        }

        .sect1 {
            padding-bottom: 0;
        }

        ol > li p, ul > li p, ul dd, ol dd, .olist .olist, .ulist .olist, .olist .ulist {
            margin-bottom: 0.34375em;
        }

    </style>
    <style type="text/css"></style>
</head>
<body class="article">
<div id="header">
    <h1>Getting Started with Codefresh</h1>
</div>
<div id="content">
    <div id="preamble">
        <div class="sectionbody">
            <div class="paragraph">
                <p>Use this guide to familiarize yourself with basic Codefresh functionality, and to get started quickly
                    and easily.</p>
            </div>
            <div class="paragraph">
                <p>Codefresh is a workflow platform for development teams that streamlines the entirety of the Docker
                    images lifecycle. Codefresh allows teams to realize the benefits of improved workflow with Docker,
                    including easy collaboration, streamlined testing, and a simplified deployment process. Although
                    system administrators and Devops have been quick to adopt Docker, developers face a significant
                    learning curve when trying to realize the benefits in their own swim lanes. By stitching together
                    the entire workflow of the Docker ecosystem in an easily-consumed web interface, CodeFresh allows
                    all stakeholders to benefit from Docker. In this way, CodeFresh brings Docker to the masses.</p>
            </div>
            <div class="paragraph">
                <p>Services can be spun up easily from a Dockerfile in an existing repo, or from a Codefresh template
                    that is customized to your technology stack. Because services are deployed in a production-like
                    environment, Codefresh compositions include all of the same components your live deployment
                    environment uses. Codefresh environments can be shared among all stakeholders by simply sharing a
                    URL, allowing everyone from the developer, to QA, to product and project managers to instantly see
                    the effects of each individual commit against the production stack.</p>
            </div>
        </div>
    </div>
    <div class="sect1">
        <h2 id="_setting_up_your_codefresh_account">Setting Up Your Codefresh Account</h2>
        <div class="sectionbody">
            <div class="olist arabic">
                <ol class="arabic">
                    <li>
                        <p>Register with <a href="https://g.codefresh.io/signup" target="_blank">Codefresh</a> for FREE
                            with your GitHub or Bitbucket account. Codefresh will link your repository information, and
                            you’ll be able to add services from your current codebase.</p>
                        <div class="paragraph">
                            <p><strong>Welcome to Codefresh! Please have a look around the platform, and <a
                                    href="mailto:contact@codefresh.io" target="_blank">e-mail us with feedback</a>. We
                                appreciate all feature requests, comments, and questions.</strong></p>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-signup.png" alt="cf signup"></span></p>
            </div>
        </div>
    </div>
    <div class="sect1">
        <h2 id="_quickstart_demo_using_node_js">Quickstart Demo Using Node.js</h2>
        <div class="sectionbody">
            <div class="olist arabic">
                <ol class="arabic">
                    <li>
                        <p><a href="https://github.com/welldone-software/cf-demo-micro-app" target="_blank">Fork (or clone+push) our
                            sample app repo</a> for the purposes of this demo, or use your own repository.</p>
                    </li>
                    <li>
                        <p>From the Codefresh console, click the <code>SERVICES</code> option on the left.</p>
                    </li>
                    <li>
                        <p>Click <code>ADD SERVICE</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-1.png" alt="cf getting started 1"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="4">
                    <li>
                        <p>Choose your existing or forked Repository from step <code>1</code>, as well as your Branch,
                            and then click <code>NEXT</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-2.png" alt="cf getting started 2"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="5">
                    <li>
                        <p>Choose the Dockerfile from the Repository under <code>YES, IN MY REPO</code>. </p>
                    </li>
                    <li>
                        <p>Click <code>NEXT</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-3.png" alt="cf getting started 3"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="7">
                    <li>
                        <p>Review the results and click <code>Close &amp; Build</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-5.png" alt="cf getting started 5"></span></p>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-6.png" alt="cf getting started 6"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="8">
                    <li>
                        <p>Click on <code>+'s</code> to see more information from the logs.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-7.png" alt="cf getting started 7"></span></p>
            </div>
            <div class="paragraph">
                <p>+
                    <strong>Congratulations! You’ve got your first service automatic image build set up. Whenever you
                        push to the repository, Codefresh will automatically build your Docker image, as well as notify
                        of any failures in the process.</strong></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="9">
                    <li>
                        <p>Click on your avatar in the upper right corner to pull down the menu.</p>
                    </li>
                    <li>
                        <p>Click <code>ACCOUNT MANAGEMENT</code> to access your account settings.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-22.png" alt="cf getting started 22"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="11">
                    <li>
                        <p>Click <code>INTEGRATION</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-23.png" alt="cf getting started 23"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="12">
                    <li>
                        <p>Click the <code>CHECKBOX</code> next to the <code>DOCKER ICON</code>, labeled <code>Enable in
                            order to activate docker hub integration</code>.</p>
                    </li>
                    <li>
                        <p>Enter your Docker Hub username and password.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-24.png" alt="cf getting started 24"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="14">
                    <li>
                        <p>Click on <code>SERVICES</code> on the left, in the sidebar navigation.</p>
                    </li>
                    <li>
                        <p>Click on the <span class="image"><img src="http://codefresh-io.github.io/cf-docs/getting-started/images/settings.sprocket.png"
                                                                 alt="settings.sprocket" width="16" height="17"></span>
                            (gear icon) for your new Service.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-8.png" alt="cf getting started 8"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="16">
                    <li>
                        <p>Make sure <code>IMAGE NAME</code> matches your docker hub username and repo path (e.g.
                            docker_hub_user/repo)</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-21.png" alt="cf getting started 21"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="17">
                    <li>
                        <p>Click <code>Push to Docker Registry</code> and then click <a href="http://hub.docker.com"
                                                                                        target="_blank">Docker Hub</a>.
                        </p>
                    </li>
                    <li>
                        <p>Scroll down and click <code>SAVE</code>.</p>
                        <div class="paragraph">
                            <p><strong>Great news! Your image will now be pushed to the Docker Hub registry on every
                                successful build.</strong></p>
                        </div>
                    </li>
                    <li>
                        <p>Click <code>BUILDS</code> on the left, in the sidebar navigation.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-9.png" alt="cf getting started 9"></span></p>
            </div>
            <div class="paragraph">
                <p>+
                    *From here, you can view the repository triggers that have been built into containers.
                    1. Click <code>IMAGES</code> on the left, in the sidebar navigation.</p>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-10.png" alt="cf getting started 10"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="21">
                    <li>
                        <p>Click on the rocket icon to launch your newly built image in a container.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-11.png" alt="cf getting started 11"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="22">
                    <li>
                        <p>Click the <code>+</code> icons to see more information about the container launch.</p>
                        <div class="paragraph">
                            <p>*You will notice that the container has failed to build, because DemoChat is expecting an
                                instance of MongoDB to be running.</p>
                        </div>
                    </li>
                    <li>
                        <p>Click <code>COMPOSITIONS</code> on the left, in the sidebar navigation.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-12.png" alt="cf getting started 12"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="24">
                    <li>
                        <p>Click <code>ADD NEW COMPOSITION</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-13.png" alt="cf getting started 13"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="25">
                    <li>
                        <p>Name the new composition <code>micro-app</code> by typing it into the <code>Name</code> box.
                        </p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-14.png" alt="cf getting started 14"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="26">
                    <li>
                        <p>Click the <code>+</code> icon to add a service to the composition.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-15.png" alt="cf getting started 15"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="27">
                    <li>
                        <p>Select the <code>cf-demo-micro-app</code> service from the <code>Pre-configured service</code> option.
                        </p>
                    </li>
                    <li>
                        <p>Click <code>ADD</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-16.png" alt="cf getting started 16"></span>
                </p>
            </div>
            <div class="paragraph">
                <p>+
                    *Codefresh will add a basic configuration for <code>cf-demo-micro-app</code> to the composition.</p>
            </div>
            <div class="listingblock">
                <div class="content">
<pre class="highlight"><code class="language-yaml" data-lang="yaml">cf-welldone-demo_cf-demo-micro-app:
    image: cf-welldone-demo/cf-demo-micro-app:master
    ports:
        - 3000
</code></pre>
                </div>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="29">
                    <li>
                        <p>Click the <code>+</code> icon to add another service to the composition.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-17.png" alt="cf getting started 17"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="30">
                    <li>
                        <p>Click <code>Pre-built image</code>.</p>
                    </li>
                    <li>
                        <p>Type <code>mongo</code> into the field.</p>
                    </li>
                    <li>
                        <p>Click <code>ADD</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-18.png" alt="cf getting started 18"></span>
                </p>
            </div>
            <div class="paragraph">
                <p>+
                    *Codefresh will add a basic configuration for <code>mongo</code> to the composition.</p>
            </div>
            <div class="listingblock">
                <div class="content">
<pre class="highlight"><code class="language-yaml" data-lang="yaml">cf-welldone-demo_cf-demo-micro-app:
    image: cf-welldone-demo/cf-demo-micro-app:master
    ports:
        - 3000
mongo:
    image: mongo
</code></pre>
                </div>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="33">
                    <li>
                        <p>Click in the text of the composition to edit it.</p>
                    </li>
                    <li>
                        <p>Change the <code>ports</code> value to <code>5000</code>.</p>
                    </li>
                    <li>
                        <p>Add a <code>links</code> line with the value of <code>mongo</code> and add <code>environment</code> variables.</p>
                        <div class="paragraph">
                            <p>*Your composition will look like the one below:</p>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="listingblock">
                <div class="content">
<pre class="highlight"><code class="language-yaml" data-lang="yaml">cf-welldone-demo_cf-demo-micro-app:
    image: cf-welldone-demo/cf-demo-micro-app:master
    ports:
        - 5000
    links:
        - mongo
    environment:
        MONGO_URL: mongo/cf-micro-api
        PORT: 5000
mongo:
    image: mongo
</code></pre>
                </div>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-19.png" alt="cf getting started 19"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="36">
                    <li>
                        <p>Click <code>SAVE</code>.</p>
                    </li>
                    <li>
                        <p>Click the rocket icon to <code>LAUNCH</code> your composition.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-20.png" alt="cf getting started 20"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="38">
                    <li>
                        <p>Click <code>+'s</code> to see the logs and if the launch succeeded.</p>
                    </li>
                    <li>
                        <p>Click <code>Open App</code> and see your app running at the URL provided.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-25.png" alt="cf getting started 25"></span>
                </p>
            </div>
            <div class="paragraph">
                <p>Now, we will add a worker service.</p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="40">
                    <li>
                        <p><a href="https://github.com/welldone-software/cf-demo-micro-worker" target="_blank">Fork (or clone+push) our
                            sample worker repo</a> for the purposes of this demo, or use your own repository.</p>
                    </li>
                    <li>
                        <p>From the Codefresh console, click the <code>SERVICES</code> option on the left.</p>
                    </li>
                    <li>
                        <p>Click <code>ADD SERVICE</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-26.png" alt="cf getting started 26"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="43">
                    <li>
                        <p>Choose your existing or forked Repository from step <code>40</code>, as well as your Branch,
                            and then click <code>NEXT</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-27.png" alt="cf getting started 27"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="44">
                    <li>
                        <p>Choose the Dockerfile from the Repository under <code>YES, IN MY REPO</code></p>
                    </li>
                    <li>
                        <p>Click <code>NEXT</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-28.png" alt="cf getting started 28"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="46">
                    <li>
                        <p>Review the results and click <code>Close &amp; Build</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-29.png" alt="cf getting started 29"></span></p>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-30.png" alt="cf getting started 30"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="47">
                    <li>
                        <p>Click on <code>SERVICES</code> on the left, in the sidebar navigation.</p>
                    </li>
                    <li>
                        <p>Click on the <span class="image"><img src="http://codefresh-io.github.io/cf-docs/getting-started/images/settings.sprocket.png"
                                                                 alt="settings.sprocket" width="16" height="17"></span>
                            (gear icon) for your new Service.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-31.png" alt="cf getting started 31"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="49">
                    <li>
                        <p>Make sure <code>IMAGE NAME</code> matches your docker hub username and repo path (e.g.
                            docker_hub_user/repo)</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-32.png" alt="cf getting started 32"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="50">
                    <li>
                        <p>Click <code>Push to Docker Registry</code> and then click <a href="http://hub.docker.com"
                                                                                        target="_blank">Docker Hub</a>.
                        </p>
                    </li>
                    <li>
                        <p>Scroll down and click <code>SAVE</code>.</p>
                    </li>
                    <li>
                        <p>Click <code>COMPOSITIONS</code> on the left, in the sidebar navigation.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-33.png" alt="cf getting started 33"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="53">
                    <li>
                        <p>Click in the text of the composition to edit it.</p>
                    </li>
                    <li>
                        <p>Click the <code>+</code> icon to add a service to the composition.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-34.png" alt="cf getting started 34"></span></p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="55">
                    <li>
                        <p>Select the <code>cf-demo-micro-worker</code> service from the <code>Pre-configured service</code> option.
                        </p>
                    </li>
                    <li>
                        <p>Click <code>ADD</code>.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-35.png" alt="cf getting started 35"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="57">
                    <li>
                        <p>Change the <code>ports</code> value to <code>5000</code>.</p>
                    </li>
                    <li>
                        <p>Add a <code>links</code> line with the value of <code>mongo</code> and add <code>environment</code> variables.</p>
                        <div class="paragraph">
                            <p>*Your composition will look like the one below:</p>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="listingblock">
                <div class="content">
<pre class="highlight"><code class="language-yaml" data-lang="yaml">cf-welldone-demo_cf-demo-micro-app:
    image: cf-welldone-demo/cf-demo-micro-app:master
    ports:
        - 5000
    links:
        - mongo
    environment:
        MONGO_URL: mongo/cf-micro-api
        PORT: 5000
mongo:
    image: mongo
cf-welldone-demo_cf-demo-micro-worker:
    image: cf-welldone-demo/cf-demo-micro-worker:master
    ports:
        - 5000
    links:
        - mongo
    environment:
        MONGO_URL: mongo/cf-micro-api
        PORT: 5000
</code></pre>
                </div>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-36.png" alt="cf getting started 36"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="59">
                    <li>
                        <p>Click <code>SAVE</code>.</p>
                    </li>
                    <li>
                        <p>Click the rocket icon to <code>LAUNCH</code> your composition.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-37.png" alt="cf getting started 37"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="61">
                    <li>
                        <p>Click <code>+'s</code> to see the logs and if the launch succeeded.</p>
                    </li>
                    <li>
                        <p>Click <code>Open App</code> and see your app running at the URL provided.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-38.png" alt="cf getting started 38"></span>
                </p>
            </div>
            <div class="olist arabic">
                <ol class="arabic" start="63">
                    <li>
                        <p>Back in the Codefresh admin, click <code>ENVIRONMENTS</code>, in the sidebar navigation.</p>
                    </li>
                </ol>
            </div>
            <div class="paragraph">
                <p><span class="image"><img src="images/cf-getting-started-39.png" alt="cf getting started 39"></span>
                </p>
            </div>
            <div class="paragraph">
                <p>+
                    <strong>From here, you can see all running Environments, and share the URLs with other stakeholders
                        in your organization.</strong></p>
            </div>
        </div>
    </div>
</div>
<!--<div id="footer">-->
    <!--<div id="footer-text">-->
        <!--Last updated 2016-04-02 09:49:09 UTC-->
    <!--</div>-->
<!--</div>-->

</body>
</html>