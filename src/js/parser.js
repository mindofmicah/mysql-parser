var Parser = function () {};

Parser.prototype.buildColumns = function (input) {
    if (input.indexOf('*') != -1) {
        return ['*']
    }

    var match = input.match(/select (.+) from/i);

    var clauses = match[1].split(/, ?/);

    var ret = [];
    var current_item = '';
    var open_parens = 0;
    for (var i=0; i < clauses.length; i++) {
        if (clauses[i].indexOf('(') != -1) {
            open_parens++;
            current_item+=clauses[i];
        } else if (clauses[i].indexOf(')') != -1) {
            open_parens--;
            ret.push(current_item +', ' + clauses[i]);
            current_item = '';
        } else {
            ret.push(clauses[i]);
        }
    }
    return ret;
};
Parser.prototype.parse = function (input) {
    var mysql = new MySQL;

    if ((input || '').length === 0) {
        return mysql;
    }

    mysql.table = 'table_1';
    mysql.columns = this.buildColumns(input||'');
    return mysql;
};


var MySQL = function () {}
