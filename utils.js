function selectFromList(term, prompt, options, ascii=""){
    return new Promise((resolve) =>{
    term.clear()
    if (ascii!=''){
        term.echo(ascii);
    }
    term.echo(prompt)
    for (i in options){
        term.echo(options[i]);
    }
    term.push(function(selection){
        select= parseInt(selection);
        if(select===NaN){
            term.clear();
            if (ascii!=''){
                term.echo(ascii);
            }
            term.echo(prompt);
            for (i in options){
                term.echo(options[i]);
            }
            term.echo('[[;Red;]Invalid Selection]');
        } else if(options.length>=select && select>0){
            term.pop();
            resolve(select);
        } else{
            term.clear()
            if (ascii!=''){
                term.echo(ascii);
            }
            term.echo(prompt)
            for (i in options){
                term.echo(options[i]);
            }
            term.echo('[[;Red;]Invalid Selection]');
        }
    },{
        prompt:'>'
    })
    })
}