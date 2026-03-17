---
date: {{ .Date }}
lastmod: {{ now.Format "2006-01-02" }}
showTableOfContents: false
tags: []
title: "{{ replace .File.ContentBaseName `-` ` ` | title }}"
summary: ""
type: "project"
params:
  yearStarted: {{ now.Format "2006" }}
  website: ""
  repo: ""
resources:
- name: "logo"
  src: ""
---
