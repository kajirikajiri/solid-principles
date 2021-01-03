module.exports = {
  "plugins": [
    [
      "@babel/plugin-proposal-object-rest-spread"
    ],
    [
      "module-resolver",
      {
        "alias": {
          "domain": "./solid/domain/"
        },
        "extensions": [".ts", ".tsx"]
      }
    ]
  ]
}