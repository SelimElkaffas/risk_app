import { Dexie } from "dexie"

export const db = new Dexie("myDatabase")
db.version(1).stores({
    patients: "++id, name, pbId, synced",
    snapshots: "++id, patientId, timestamp, pbId, synced"
})

// // Delete any associated snapshots when a patient is deleted
// db.patients.hook('deleting', function (primaryKey, obj, transaction) {
//     transaction.table('snapshots').where('patientId').equals(Number(primaryKey)).delete()
// })