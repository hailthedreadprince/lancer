function selectFromList(term, prompt, options, ascii=""){
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
                term.echo(i);
            }
            term.echo('[[;Red;]Invalid Selection]');
        } else if(options.length>=select && select>0){
            term.pop();
            return(select);
        } else{
            term.clear()
            if (ascii!=''){
                term.echo(ascii);
            }
            term.echo(prompt)
            for (i in options){
                term.echo(i);
            }
            term.echo('[[;Red;]Invalid Selection]');
        }
    },{
        prompt:'>'
    })
}