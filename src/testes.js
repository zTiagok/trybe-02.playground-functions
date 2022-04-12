function techList(tech, name) {

    let objeto = []

    for (let index in tech)
    {

        objeto.push
        (

            {tech: tech[index],
            name: name}
        )
    }








    return (objeto);

}


console.log(techList())