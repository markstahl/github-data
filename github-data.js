let data = require('./data')

// How many repositories does LaunchAcademy own?
totalRepositories = data.length;
console.log('Launch Academy has a total of ' + totalRepositories + ' repositores.');

// Which repository has the largest size?
let max = 0;
let repo_name;
data.forEach(repo => {
  if(repo.size > max) { max = repo.size;
    repo_name = repo;
  }
});
console.log('\'' + repo_name.name + '\'' + ' has the largest repository with ' + max + ' entries.');

// What is the most-recently created repository?
let dates = [];
let repo_new;
data.forEach(repo => {
  dates.push(repo.created_at);
  repo_new = repo;
});
dates.sort();
console.log('\'' + repo_new.name + '\'' + ' is the newest repository.');

// Use .map to return an array of descriptions.
let array = data.map(repo => {
if (repo.description != null) {
  return repo.description;
}
});
console.log(array);

//Use .map to return to create a summary.
let repo_names;
let repo_watchers;
let repo_owner;
let arraytwo = data.map(repo => {
  repo_names = repo.name;
  repo_watchers = repo.watchers_count;
  repo_owner = repo.owner;
  console.log('Repo name is ' + repo.name + ' , ' + repo.watchers_count + ' watchers, owner is ' + repo.owner + ',');
});
