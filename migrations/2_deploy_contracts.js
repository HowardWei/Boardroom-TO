module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.autolink();
    deployer.deploy(MetaCoin);
    deployer.deploy(OpenRegistry).then(function() {
        return deployer.deploy(OpenRegistryRules, OpenRegistry.address);
    });
    deployer.deploy(Proxy);
    deployer.deploy(BoardRoom);
};
