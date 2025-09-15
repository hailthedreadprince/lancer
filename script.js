$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);
    var selected
    if (cmd.name === 'startup') {
        //TODO add startup animation

        term.exec('selectFrom', {silent:true});
        term.echo(selected);
    } else if (cmd.name === 'progress'){
        var time = cmd.args[0];
        var width = cmd.args[1];
        
    } else if(cmd.name === 'selectFrom'){
        for (i in cmd.args){
            term.echo(i)
        }
        term.push(function(selection){
            selection = parseInt(selection);
            if (selection === NaN){
                term.clear();
                term.echo("Invalid Selection")
                for (i in cmd.args){term.echo(i)}
            } else if (selection <= cmd.args.length-1 && selection >0){
                selected = selection
                term.pop()
            }else{
                term.clear()
                term.echo("Invalid Selection")
                for (i in cmd.args){term.echo(i)}
            }
        },{
            prompt: '>'
        })
    }else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: startup.innerHTML,
    onInit: function(term) {
        //run after term initializes
        term.exec('startup', {silent:true});
    }
});
