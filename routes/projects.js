const express = require('express');
const controller = require('../controllers/projectsController');
const authHelpers = require('../services/auth/authHelpers');

console.log('Whaaaaat');

const projectRoutes = express.Router();
console.log('Whaaaaat 2');

projectRoutes.get('/', authHelpers.loginRequired, controller.index);
console.log('Whaaaaat 3');
// projectRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('controllers/projects-add', {
//     documentTitle: 'Projects!',
//   });
// });
// projectRoutes.get('/edit/:id', authHelpers.loginRequired, controller.edit);
console.log('Whaaaaat 4');
projectRoutes.get('/:id', authHelpers.loginRequired, controller.show);
projectRoutes.post('/', authHelpers.loginRequired, controller.create);
projectRoutes.put('/:id', authHelpers.loginRequired, controller.update);
projectRoutes.delete('/:id', authHelpers.loginRequired, controller.destroy);

module.exports = projectRoutes;
