describe('Movies', function() {
  it('captures user data', function(){
    var testTicket = new Ticket("Homeward Bound", "45", "7:00pm");
    expect(testTicket.movie).to.equal("Homeward Bound");
    expect(testTicket.age).to.equal("45");
    expect(testTicket.time).to.equal("7:00pm");
  });
});
