var express = require('express');
var router = express.Router();

var auth = require('./auth.js');
var desenvolvimento = require('./desenvolvimento.js');
var products = require('./products.js');
var user = require('./users.js');

/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);


/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/projetos', desenvolvimento.projetos);
router.get('/api/v1/versaoEmAndamento', desenvolvimento.versaoEmAndamento);
router.get('/api/v1/versoes', desenvolvimento.versoes);

router.get('/api/v1/atividadesPorChamados', desenvolvimento.atividadesPorChamados);
router.get('/api/v1/atividadesEncerradasPorOrigem', desenvolvimento.atividadesEncerradasPorOrigem);
router.get('/api/v1/atividadesNaoLiberadas', desenvolvimento.atividadesNaoLiberadas);
router.get('/api/v1/atividadesPorProjeto', desenvolvimento.atividadesPorProjeto);
router.get('/api/v1/atividadesPorSituacao', desenvolvimento.atividadesPorSituacao);
router.get('/api/v1/atividadesPorTipo', desenvolvimento.atividadesPorTipo);
router.get('/api/v1/evolucaoBacklog', desenvolvimento.evolucaoBacklog);
router.get('/api/v1/resolvidasPorColaborador', desenvolvimento.resolvidasPorColaborador);
router.get('/api/v1/testadasPorColaborador', desenvolvimento.testadasPorColaborador);
router.get('/api/v1/relacaoAtividadesAbertasEncerradas', desenvolvimento.relacaoAtividadesAbertasEncerradas);

/*
 * Routes that can be accessed only by autheticated users
 */
router.get('/api/v1/products', products.getAll);
router.get('/api/v1/product/:id', products.getOne);
router.post('/api/v1/product/', products.create);
router.put('/api/v1/product/:id', products.update);
router.delete('/api/v1/product/:id', products.delete);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
router.get('/api/v1/admin/users', user.getAll);
router.get('/api/v1/admin/user/:id', user.getOne);
router.post('/api/v1/admin/user/', user.create);
router.put('/api/v1/admin/user/:id', user.update);
router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;