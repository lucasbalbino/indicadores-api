var fs = require('fs');

var desenvolvimento = {

    projetos: function (req, res) {
        var projetos = JSON.parse(fs.readFileSync('tmp/projetos'));
        res.json(projetos);
    },

    versaoEmAndamento: function (req, res) {
        var projeto = req.query.projeto;
        var versao = JSON.parse(fs.readFileSync('tmp/versaoEmAndamento'));
        res.json(versao);
    },

    versoes: function (req, res) {
        var projeto = req.query.projeto;
        var versoes = JSON.parse(fs.readFileSync('tmp/versoes'));
        res.json(versoes);
    },






    atividadesPorChamados: function (req, res) {
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesPorChamados'));
        res.json(atividades);
    },

    atividadesEncerradasPorOrigem: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesEncerradasPorOrigem'));
        res.json(atividades);
    },

    atividadesNaoLiberadas: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesNaoLiberadas'));
        res.json(atividades);
    },

    atividadesPorProjeto: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesPorProjeto'));
        res.json(atividades);
    },

    atividadesPorSituacao: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesPorSituacao'));
        res.json(atividades);
    },

    atividadesPorTipo: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/atividadesPorTipo'));
        res.json(atividades);
    },

    evolucaoBacklog: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/evolucaoBacklog'));
        res.json(atividades);
    },

    resolvidasPorColaborador: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/resolvidasPorColaborador'));
        res.json(atividades);
    },

    testadasPorColaborador: function (req, res) {
        var versao = req.query.versao;
        var atividades = JSON.parse(fs.readFileSync('tmp/testadasPorColaborador'));
        res.json(atividades);
    },

    relacaoAtividadesAbertasEncerradas: function (req, res) {
        var versao = req.query.versao;
        var dataInicial = req.query.dataInicial;
        var dataFinal = req.query.dataFinal;
        var atividades = JSON.parse(fs.readFileSync('tmp/relacaoAtividadesAbertasEncerradas'));
        res.json(atividades);
    }
};

module.exports = desenvolvimento;