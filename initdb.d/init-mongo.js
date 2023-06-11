db = db.getSiblingDB("RecipientService");
db.createCollection('RecipientAggregate');
db.createUser({
    user: "wfuser",
    pwd: "MyPassw0rd_",
    roles: [{
            role: "readWrite",
            db: "RecipientService"
        }
    ]
});
