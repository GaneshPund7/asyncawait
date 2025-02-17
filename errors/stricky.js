console.log('Start');

setTimeout(function() {
  console.log('Timeout');
}, 0);

Promise.resolve().then(function() {
  console.log('Promise');
});

console.log('End');


// next qn
try{
getUser(function(user) {
    getProfile(user, function(profile) {
      getPosts(user, function(posts) {
        console.log('User:', user);
        console.log('Profile:', profile);
        console.log('Posts:', posts);
      });
    });
  });
}catch(error){
console.log(error.message);
}