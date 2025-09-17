$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        //TODO add startup animation
        term.exec("mainMenu", {silent:true})
    }else if (cmd.name === 'mainMenu'){
        task = selectFromList(term, "Select Tast", ["1. View operations", "2. View remote connections", "3. View diagnostics"]);
        term.echo(task);
    } else if (cmd.name === 'progress'){
        var time = cmd.args[0];
        var width = cmd.args[1];
        
    } else {
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
