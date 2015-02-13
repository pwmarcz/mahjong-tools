
var LANGUAGES = ['en', 'pl'];

function prepare() {
    var rules = jsyaml.load($('#rules-yaml').html());
    var table = $('#rules-table');
    $.each(rules, function(i, rule) {
        table.append(renderRule(i, rule));
    });

    $('input[name=language]').change(updateLanguage);
    updateLanguage();
}

function updateLanguage() {
    $.each(LANGUAGES, function(i, lang) {
        $('.lang-' + lang).hide();
    });

    var lang = $('input[name=language]:checked').val();
    $('.lang-' + lang).show();
}

function forLanguages(content, func) {
    if (typeof content === 'string') {
        func(content, 'all');
    } else {
        $.each(LANGUAGES, function(i, lang) {
            if (content[lang]) {
                func(content[lang], lang);
            }
        });
    }
}

function renderRule(i, rule) {
    var src = '<tr><td class="name"></td><td class="options"></td></tr>';
    var elt = $(src);
    forLanguages(rule.name, function(name, lang) {
        var name_in_lang = $('<div>').addClass('lang-'+lang).text(name);
        elt.find('.name').append(name_in_lang);
    });
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
    var id = i+'-'+j;
    var name;
    if (type == 'radio')
        name = 'sel'+i;
    else
        name = 'check'+i+'-'+j;
    var elt = $(
        '<div>' +
        '<input class="opt" type="'+type+'" name="'+name+'" id="'+id+'">' +
        '<label for="' + id + '"></label>' +
        '</div>'
    );

    forLanguages(val, function(description, lang) {
        var label_in_lang = $('<span>').addClass('lang-'+lang).attr('for', id).text(description);
        elt.find('label').append(label_in_lang);
    });
    if (initial === undefined)
        initial = [1];
    if (typeof initial == 'number')
        initial = [initial];
    if (initial.indexOf(j+1) != -1)
        elt.find('input').attr('checked', true);
    return elt;
}

$(prepare);
