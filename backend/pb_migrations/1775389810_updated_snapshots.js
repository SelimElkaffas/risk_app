/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_700096677")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number2407543928",
    "max": null,
    "min": null,
    "name": "patientId",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_700096677")

  // remove field
  collection.fields.removeById("number2407543928")

  return app.save(collection)
})
