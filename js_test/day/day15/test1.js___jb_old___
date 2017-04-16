/**
 * Created by Administrator on 2017/4/14 0014.
 * param
 * return
 */
let names = [ 'Will', 'Jack', 'Peter', 'Steve', 'John', 'Hugo', 'Mike' ];
let newSet = names
        .map((name, index) => {
        return {
            id: index,
            name: name
        }
    })
.filter(man => man.id % 2 == 0)
.map(man => [man.name])
.reduce((a, b) => a.concat(b));
// let newSet2 = names.map((name, index) => {
//
// })

console.log(newSet);


//=> [ 'Will', 'Peter', 'John', 'Mike' ]