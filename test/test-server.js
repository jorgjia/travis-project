var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index.js');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe("Projekt per Travis ",function(){
	it("duhet te ketheje 'Helloo world'", function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
	});
});