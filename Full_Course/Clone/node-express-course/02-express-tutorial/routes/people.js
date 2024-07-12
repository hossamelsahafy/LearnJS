const express = require('express')
const router = express.Router()
let { people }= require('../data')
const {
    getPeople,
    postPeople,
    postPostman,
    putPeople,
    deletePeople } = require('../Controllers/people')

// Method 1

// router.get('/', getPeople)

// router.post('/', postPeople)

// router.post('/postman', postPostman)

// router.put('/:id', putPeople)

// router.delete('/:id', deletePeople)

// Method 2

router.route('/').get(getPeople);

router.route('/').post(postPeople);

router.route('/postman').post(postPeople);

// router.route('/:id').put(putPeople)

// router.route('/:id').delete(deletePeople);

// Instead Of That Line We Can Do That

router.route('/:id').put(putPeople).delete(deletePeople);

module.exports = router
