#!/bin/bash

# Generates an HTML file given the page name ($1).
generate_main_html() {
  chevron -d templates/$1.yaml -p templates/ templates/base.mustache > $1.html
}

# Generates a blogpost HTML file given the blog ID ($1).
generate_blogpost_html() {
  chevron -d blog/templates/id_$1.yaml -p blog/templates/ templates/base.mustache > blog/$1.html
}

generate_main_html blog
generate_main_html cs61b
generate_main_html index
generate_main_html organizations
generate_main_html projects
generate_main_html work

generate_blogpost_html "20131125"
generate_blogpost_html "20131216"
generate_blogpost_html "20131227"
generate_blogpost_html "20140209"
generate_blogpost_html "20140408"
generate_blogpost_html "20140424"
generate_blogpost_html "20140823"

exit 0
