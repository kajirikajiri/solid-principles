module.exports = {
  "plugins": [
    [
      "@babel/plugin-proposal-object-rest-spread"
    ],
    [
      "module-resolver",
      {
        "alias": {
          "domain": "./solid/domain/",
          "presentation": "./solid/presentation/",
          "styles": "./styles/"
        },
        "extensions": [".ts", ".tsx"]
      }
    ]
  ]
}