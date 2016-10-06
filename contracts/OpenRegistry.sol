contract OpenRegistry {
  function register(address _someMember) {
    members.push(_someMember);
    isMember[_someMember] = true;
  }

  function numMembers() returns (uint) {
    return members.length;
  }
  function memberForId(uint id) returns (address) {
    return members[id];
  }

  address[] public members;
  mapping(address => bool) public isMember;
}
