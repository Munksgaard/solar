// migrations/2_deploy.js

const Sol = artifacts.require('@openzeppelin/contracts/ERC721PresetMinterPauserAutoId');

module.exports = function(deployer) {
  deployer.deploy(Sol, 'Solar', 'SOL', "https://my-json-server.typicode.com/Munksgaard/solar/tokens/");
};
