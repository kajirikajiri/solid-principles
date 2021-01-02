const plugins = [
  [
    require.resolve('babel-plugin-root-import'),
    {
      paths: [
        {
          rootPathSuffix: "./solid/domain",
          rootPathPrefix: "domain"
        },
        // {
        //   rootPathSuffix: "",
        //   rootPathPrefix: ""
        // },
      ]
    }
  ]
]
