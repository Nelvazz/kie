global.path = __dirname.replaceAll("\\", "/").replace("/container", "/");
global.dataPath = path+'data/';
global.jsonsPath = path+'data/jsons/';
global.containerPath = path+'container/';

global.print = function (text) {
    let basicText = text.replaceAll("|*", "").replaceAll("*|", "")
    text = text.replaceAll("[", "[`.blue+`")
    text = text.replaceAll("]", "`.white+`]`.blue+`")
    let color = text.split("~").filter(color => color.includes(';'))
    let colorArr = []
    color.forEach(txt => {
    	let arr = txt.split(';')
        colorArr.push(`\`.white+\`${arr[1]}\`.${arr[0]}+\``)
        basicText = basicText.replace(`~${arr[0]};${arr[1]}~`, arr[1])
    })
    colorArr.forEach((col, i) => {
        text = text.replace(`~${color[i]}~`, col)
    })
    basicText = basicText.length
    text = Array.from(text)
    text[text.length-1] = ""
    text[text.length-2] = ""
    text.unshift("\`")
    text = text.join('')
    let space = 128 - basicText
    let spaces = []
    for (var i=0; i<space; i++) {
        spaces.push(" ")
    }
    let divide = 2*text.split("|").filter(txt => txt.includes('*')).length
    if (divide == 0) {
        console.log(eval(text))
        return
    }
    if (space>0 && (space%2)==0) {
        text = text.replaceAll("|*", `${' '.repeat(space/divide)}\`+\``)
        text = text.replaceAll("*|", `\`.white+\`${' '.repeat(space/divide)}`)
    } else if (space>0 && (space%2)==1) {
        function partition(array, n) {
          	return array.length ? [array.splice(0, n)].concat(partition(array, n)) : [];
        }
        spaces = partition(spaces, (space/divide))
        let decimal = `0.${((space/divide)+"").split(".")[1]}`
        if (spaces.length>divide) {
            let i=0
            for (const elem of spaces[divide]) {
                spaces[i]=spaces[i].concat(elem)
                i+=1
            }
            spaces.pop()
        }
        spaces.forEach((elem, i) => {
            i%2 == 0 ? text = text.replace("|*", `${elem.join("")}\`+\``) : text = text.replace("*|", `\`.white+\`${elem.join("")}`)
        })
    }
    console.log(eval(text))
}
global.sleep = async function (seconds) {
    await new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
