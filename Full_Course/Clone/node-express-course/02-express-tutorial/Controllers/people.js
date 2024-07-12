let { people } = require('../data')
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people})
}

const postPeople = (req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true, person:name})
};

const postPostman = ((req, res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success:false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true, data:[...people, name]}) 
})

const putPeople = ((req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res
            .status(404)
            .json({success:false, msg:`No person with id ${req.params.id}`})
    }
    const newPerson = people.map((person) => {
        if(person.id === Number(req.params.id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPerson})
});

const deletePeople = ((req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with id ${req.params.id}` });
    }
    people = people.filter((person) => person.id !== Number(req.params.id));
    res.status(200).json({ success: true, data: people });
});
module.exports = {
    getPeople,
    postPeople,
    postPostman,
    putPeople,
    deletePeople
}
