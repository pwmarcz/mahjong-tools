function prepare() {
    var rules = jsyaml.load($('#rules-yaml').html());
    var table = $('#rules-table');
    $.each(rules, function(i, rule) {
        table.append(renderRule(i, rule));
    });
}

function renderRule(i, rule) {
    var src = '<tr><td class="name"></td><td class="options"></td></tr>';
    var elt = $(src);
    elt.find('.name').append(hepburn(rule.name));
    var options = elt.find('.options');
    if (rule.select) {
        $.each(rule.select, function(j, val) {
            options.append(
                renderOpt('radio', i, j, val, rule.initial));
        });
    }
    if (rule.check) {
        $.each(rule.check, function(j, val) {
            options.append(
                renderOpt('checkbox', i, j, val, rule.initial));
        });
    }
    if (rule.input) {
        options.append('<textarea class="text" rows="2" cols="30"></textarea>');
    }
    return elt;
}

function renderOpt(type, i, j, val, initial) {
    val = hepburn(val);
    var id = i+'-'+j;
    var name;
    if (type == 'radio')
        name = 'sel'+i;
    else
        name = 'check'+i+'-'+j;
    var elt = $(
        '<div>' +
        '<input class="opt" type="'+type+'" name="'+name+'" id="'+id+'">' +
        '<label for="'+id+'">'+val+'</label>' +
        '</div>'
    );
    if (initial == undefined)
        initial = [1];
    if (typeof initial == 'number')
        initial = [initial];
    if (initial.indexOf(j+1) != -1)
        elt.find('input').attr('checked', true);
    return elt;
}

function hepburn(s) {
    return s.replace(/ou/g, "ō")
            .replace(/uu/g, "ū")
            .replace(/aa/g, "ā");
}

$(prepare);
