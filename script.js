$('#terminal').terminal(function(command, term) {
    const cmd = $.terminal.parse_command(command);

    if (cmd.name === 'startup') {
        //TODO add startup animation

        term.clear();
        term.echo("Select Task");
        term.echo("1. View operations");
        term.echo("2. View remote connections");
        term.echo("3. View diagnostics");
        term.push(function(selection) {
            if (selection === '1'){
                term.echo("selected option 1");
                term.pop();
            } else if (selection === '2'){
                term.echo("option 2")
                term.pop();
            } else if (selection ==='3'){
                term.echo("Option 3")
                term.pop();
            } else {
                term.clear()
                term.echo("Invalid Selection")
            }
        })
    } else if (cmd.name === 'progress'){
        var time = cmd.args[0]
        var width = cmd.args[1]
        
    } else {
        term.echo(`Unknown command: ${cmd.name}`);
    }
}, {
    prompt: '> ',
    greetings: startup.innerHTML,
    onInit: function(term) {
        //run after term initializes
        term.exec('startup potato potato')
    }
});
