# Quiver Work Log Note Generator

This script will create a new "work log" markdown note template in Quiver

## Example

Title: `Z Week 27: 28/6 - 2/7`

```markdown
## 28/6, Monday


## 29/6, Tuesday


## 30/6, Wednesday


## 1/7, Thursday


## 2/7, Friday


```

## Install

```bash
npm install -g .
```

An environment variable `QUIVER_WORKLOG_BASEDIR` is required (can set in `~/.zshrc` for example)

```bash
# QUIVER
export QUIVER_WORKLOG_BASEDIR=~/quiver/Work.qvlibrary/92A0B31E-3D46-4D87-B2D9-1567E0622B8D.qvnotebook
```

Then it can be run via `work-log` directly

## Reference

https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
