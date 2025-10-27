import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components: any) {
  return {
    ...themeComponents,
    ...components,
    // You can add custom components here
    // For example:
    // h1: (props) => <h1 className="custom-h1" {...props} />,
  }
}