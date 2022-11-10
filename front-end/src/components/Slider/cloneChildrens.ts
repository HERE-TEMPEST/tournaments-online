/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function cloneChildren(
  children: unknown | any,
  props: any,
  filter: any
): Array<any> {
  // Set the filter to return true by default
  if (typeof filter === 'undefined') {
    filter = () => {
      return true
    }
  }

  // If a string was passed in as the filter, look for that tagname
  else if (typeof filter === 'string') {
    const tagname = filter
    filter = (child: any) => {
      return (
        (child.type.name || child.type) === tagname ||
        (child.props && child.props.type === tagname)
      )
    }
  } else if (Array.isArray(filter)) {
    const tagnames = filter
    filter = (child: any) => {
      return tagnames.some((tagname) => {
        if (
          (child.type.name || child.type) === tagname ||
          (child.props && child.props.type === tagname)
        ) {
          return true
        }
      })
    }
  }

  return React.Children.map<any, any>(children, (child: any) => {
    if (React.isValidElement(child)) {
      if (child.props) {
        let new_props = {}
        if (filter(child)) {
          if (typeof props === 'function') {
            new_props = props(child)
          } else {
            new_props = props
          }
        }
        const childProps = child.props as any

        return React.cloneElement(
          child,
          new_props,
          cloneChildren(childProps.children, props, filter)
        )
      }
    }
    return child
  })
}
