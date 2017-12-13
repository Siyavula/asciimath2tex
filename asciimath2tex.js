export default class AsciiMathParser {
    constructor() {
        this.decimalsign = '\\.';

        this.greek_letters = ['alpha', 'beta', 'gamma', 'Gamma', 'delta', 'Delta', 'epsilon', 'varepsilon', 'zeta', 'eta', 'theta', 'Theta', 'vartheta', 'iota', 'kappa', 'lambda', 'Lambda', 'mu', 'nu', 'xi', 'Xi', 'pi', 'Pi', 'rho', 'sigma', 'Sigma', 'tau', 'upsilon', 'phi', 'Phi', 'varphi', 'chi', 'psi', 'Psi', 'omega', 'Omega'];

        this.constants = [
            {"asciimath":"dt","tex":"dt"},
            {"asciimath":"dx","tex":"dx"},
            {"asciimath":"dy","tex":"dy"},
            {"asciimath":"dz","tex":"dz"},
            {"asciimath":"prime","tex":"'"},
            {"asciimath":"implies","tex":"\\implies"},
            {"asciimath":"epsi","tex":"\\epsilon"},
            {"asciimath":"leftrightarrow","tex":"\\leftrightarrow"},
            {"asciimath":"Leftrightarrow","tex":"\\Leftrightarrow"},
            {"asciimath":"rightarrow","tex":"\\rightarrow"},
            {"asciimath":"Rightarrow","tex":"\\Rightarrow"},
            {"asciimath":"backslash","tex":"\\backslash"},
            {"asciimath":"leftarrow","tex":"\\leftarrow"},
            {"asciimath":"Leftarrow","tex":"\\Leftarrow"},
            {"asciimath":"setminus","tex":"\\setminus"},
            {"asciimath":"bigwedge","tex":"\\bigwedge"},
            {"asciimath":"diamond","tex":"\\diamond"},
            {"asciimath":"bowtie","tex":"\\bowtie"},
            {"asciimath":"bigvee","tex":"\\bigvee"},
            {"asciimath":"bigcap","tex":"\\bigcap"},
            {"asciimath":"bigcup","tex":"\\bigcup"},
            {"asciimath":"approx","tex":"\\approx"},
            {"asciimath":"square","tex":"\\square"},
            {"asciimath":"lamda","tex":"\\lambda"},
            {"asciimath":"Lamda","tex":"\\Lambda"},
            {"asciimath":"aleph","tex":"\\aleph"},
            {"asciimath":"angle","tex":"\\angle"},
            {"asciimath":"frown","tex":"\\frown"},
            {"asciimath":"qquad","tex":"\\qquad"},
            {"asciimath":"cdots","tex":"\\cdots"},
            {"asciimath":"vdots","tex":"\\vdots"},
            {"asciimath":"ddots","tex":"\\ddots"},
            {"asciimath":"cdot","tex":"\\cdot"},
            {"asciimath":"star","tex":"\\star"},
            {"asciimath":"|><|","tex":"\\bowtie"},
            {"asciimath":"circ","tex":"\\circ"},
            {"asciimath":"sube","tex":"\\subseteq"},
            {"asciimath":"supe","tex":"\\supseteq"},
            {"asciimath":"cong","tex":"\\cong"},
            {"asciimath":"prop","tex":"\\propto"},
            {"asciimath":"propto","tex":"\\propto"},
            {"asciimath":"oint","tex":"\\oint"},
            {"asciimath":"grad","tex":"\\nabla"},
            {"asciimath":"quad","tex":"\\quad"},
            {"asciimath":"uarr","tex":"\\uparrow"},
            {"asciimath":"darr","tex":"\\downarrow"},
            {"asciimath":"downarrow","tex":"\\downarrow"},
            {"asciimath":"rarr","tex":"\\rightarrow"},
            {"asciimath":">->>","tex":"\\twoheadrightarrowtail"},
            {"asciimath":"larr","tex":"\\leftarrow"},
            {"asciimath":"harr","tex":"\\leftrightarrow"},
            {"asciimath":"rArr","tex":"\\Rightarrow"},
            {"asciimath":"lArr","tex":"\\Leftarrow"},
            {"asciimath":"hArr","tex":"\\Leftrightarrow"},
            {"asciimath":"ast","tex":"\\ast"},
            {"asciimath":"***","tex":"\\star"},
            {"asciimath":"|><","tex":"\\ltimes"},
            {"asciimath":"><|","tex":"\\rtimes"},
            {"asciimath":"^^^","tex":"\\bigwedge"},
            {"asciimath":"vvv","tex":"\\bigvee"},
            {"asciimath":"cap","tex":"\\cap"},
            {"asciimath":"nnn","tex":"\\bigcap"},
            {"asciimath":"cup","tex":"\\cup"},
            {"asciimath":"uuu","tex":"\\bigcup"},
            {"asciimath":"lt=","tex":"\\leq"},
            {"asciimath":"gt=","tex":"\\geq"},
            {"asciimath":"-lt","tex":"\\prec"},
            {"asciimath":"-<=","tex":"\\preceq"},
            {"asciimath":">-=","tex":"\\succeq"},
            {"asciimath":"!in","tex":"\\notin"},
            {"asciimath":"sub","tex":"\\subset"},
            {"asciimath":"sup","tex":"\\supset"},
            {"asciimath":"not","tex":"\\neg"},
            {"asciimath":"<=>","tex":"\\Leftrightarrow"},
            {"asciimath":"_|_","tex":"\\bot"},
            {"asciimath":"bot","tex":"\\bot"},
            {"asciimath":"|--","tex":"\\vdash"},
            {"asciimath":"|==","tex":"\\models"},
            {"asciimath":":|:","tex":"\\|"},
            {"asciimath":"int","tex":"\\int"},
            {"asciimath":"del","tex":"\\partial"},
            {"asciimath":"...","tex":"\\ldots"},
            {"asciimath":"/_\\","tex":"\\triangle"},
            {"asciimath":"|__","tex":"\\lfloor"},
            {"asciimath":"__|","tex":"\\rfloor"},
            {"asciimath":"dim","tex":"\\dim"},
            {"asciimath":"mod","tex":"\\operatorname{mod}"},
            {"asciimath":"lub","tex":"\\operatorname{lub}"},
            {"asciimath":"glb","tex":"\\operatorname{glb}"},
            {"asciimath":">->","tex":"\\rightarrowtail"},
            {"asciimath":"->>","tex":"\\twoheadrightarrow"},
            {"asciimath":"|->","tex":"\\mapsto"},
            {"asciimath":"lim","tex":"\\lim"},
            {"asciimath":"Lim","tex":"\\operatorname{Lim}"},
            {"asciimath":"and","tex":"\\quad\\text{and}\\quad"},
            {"asciimath":"**","tex":"\\ast"},
            {"asciimath":"//","tex":"/"},
            {"asciimath":"\\","tex":"\\,"},
            {"asciimath":"\\\\","tex":"\\backslash"},
            {"asciimath":"xx","tex":"\\times"},
            {"asciimath":"-:","tex":"\\div"},
            {"asciimath":"o+","tex":"\\oplus"},
            {"asciimath":"ox","tex":"\\otimes"},
            {"asciimath":"o.","tex":"\\odot"},
            {"asciimath":"^","tex":"\\hat{}"},
            {"asciimath":"_","tex":"\\_"},
            {"asciimath":"^^","tex":"\\wedge"},
            {"asciimath":"vv","tex":"\\vee"},
            {"asciimath":"nn","tex":"\\cap"},
            {"asciimath":"uu","tex":"\\cup"},
            {"asciimath":"!=","tex":"\\ne"},
            {"asciimath":":=","tex":":="},
            {"asciimath":"lt","tex":"\\lt"},
            {"asciimath":"gt","tex":"\\gt"},
            {"asciimath":"<=","tex":"\\le"},
            {"asciimath":">=","tex":"\\ge"},
            {"asciimath":"-<","tex":"\\prec"},
            {"asciimath":">-","tex":"\\succ"},
            {"asciimath":"in","tex":"\\in"},
            {"asciimath":"-=","tex":"\\equiv"},
            {"asciimath":"~=","tex":"\\cong"},
            {"asciimath":"~~","tex":"\\approx"},
            {"asciimath":"=>","tex":"\\Rightarrow"},
            {"asciimath":"AA","tex":"\\forall"},
            {"asciimath":"EE","tex":"\\exists"},
            {"asciimath":"TT","tex":"\\top"},
            {"asciimath":"+-","tex":"\\pm"},
            {"asciimath":"O/","tex":"\\emptyset"},
            {"asciimath":"oo","tex":"\\infty"},
            {"asciimath":":.","tex":"\\therefore"},
            {"asciimath":":'","tex":"\\because"},
            {"asciimath":"/_","tex":"\\angle"},
            {"asciimath":"|~","tex":"\\lceil"},
            {"asciimath":"~|","tex":"\\rceil"},
            {"asciimath":"CC","tex":"\\mathbb{C}"},
            {"asciimath":"NN","tex":"\\mathbb{N}"},
            {"asciimath":"QQ","tex":"\\mathbb{Q}"},
            {"asciimath":"RR","tex":"\\mathbb{R}"},
            {"asciimath":"ZZ","tex":"\\mathbb{Z}"},
            {"asciimath":"->","tex":"\\to"},
            {"asciimath":"or","tex":"\\quad\\text{or}\\quad"},
            {"asciimath":"if","tex":"\\quad\\text{if}\\quad"},
            {"asciimath":"iff", "tex":"\\iff"},
            {"asciimath":"*","tex":"\\cdot"},
            {"asciimath":"@","tex":"\\circ"},
            {"asciimath":"%","tex":"\\%"},
            {"asciimath":"boxempty","tex":"\\square"},
            {"asciimath":"lambda","tex":"\\lambda"},
            {"asciimath":"Lambda","tex":"\\Lambda"},
            {"asciimath":"subseteq","tex":"\\subseteq"},
            {"asciimath":"supseteq","tex":"\\supseteq"},
            {"asciimath":"propto","tex":"\\propto"},
            {"asciimath":"nabla","tex":"\\nabla"},
            {"asciimath":"uparrow","tex":"\\uparrow"},
            {"asciimath":"downarrow","tex":"\\downarrow"},
            {"asciimath":"twoheadrightarrowtail","tex":"\\twoheadrightarrowtail"},
            {"asciimath":"ltimes","tex":"\\ltimes"},
            {"asciimath":"rtimes","tex":"\\rtimes"},
            {"asciimath":"leq","tex":"\\leq"},
            {"asciimath":"geq","tex":"\\geq"},
            {"asciimath":"prec","tex":"\\prec"},
            {"asciimath":"preceq","tex":"\\preceq"},
            {"asciimath":"succeq","tex":"\\succeq"},
            {"asciimath":"notin","tex":"\\notin"},
            {"asciimath":"subset","tex":"\\subset"},
            {"asciimath":"supset","tex":"\\supset"},
            {"asciimath":"neg","tex":"\\neg"},
            {"asciimath":"vdash","tex":"\\vdash"},
            {"asciimath":"models","tex":"\\models"},
            {"asciimath":"partial","tex":"\\partial"},
            {"asciimath":"ldots","tex":"\\ldots"},
            {"asciimath":"triangle","tex":"\\triangle"},
            {"asciimath":"lfloor","tex":"\\lfloor"},
            {"asciimath":"rfloor","tex":"\\rfloor"},
            {"asciimath":"rightarrowtail","tex":"\\rightarrowtail"},
            {"asciimath":"twoheadrightarrow","tex":"\\twoheadrightarrow"},
            {"asciimath":"mapsto","tex":"\\mapsto"},
            {"asciimath":"times","tex":"\\times"},
            {"asciimath":"div","tex":"\\div"},
            {"asciimath":"divide","tex":"\\div"},
            {"asciimath":"oplus","tex":"\\oplus"},
            {"asciimath":"otimes","tex":"\\otimes"},
            {"asciimath":"odot","tex":"\\odot"},
            {"asciimath":"wedge","tex":"\\wedge"},
            {"asciimath":"vee","tex":"\\vee"},
            {"asciimath":"ne","tex":"\\ne"},
            {"asciimath":"le","tex":"\\le"},
            {"asciimath":"ge","tex":"\\ge"},
            {"asciimath":"succ","tex":"\\succ"},
            {"asciimath":"equiv","tex":"\\equiv"},
            {"asciimath":"forall","tex":"\\forall"},
            {"asciimath":"exists","tex":"\\exists"},
            {"asciimath":"top","tex":"\\top"},
            {"asciimath":"pm","tex":"\\pm"},
            {"asciimath":"emptyset","tex":"\\emptyset"},
            {"asciimath":"infty","tex":"\\infty"},
            {"asciimath":"therefore","tex":"\\therefore"},
            {"asciimath":"because","tex":"\\because"},
            {"asciimath":"lceil","tex":"\\lceil"},
            {"asciimath":"rceil","tex":"\\rceil"},
            {"asciimath":"to","tex":"\\to"},
            {"asciimath":"langle","tex":"\\langle"},
            {"asciimath":"lceiling","tex":"\\lceil"},
            {"asciimath":"rceiling","tex":"\\rceil"},
            {"asciimath":"max","tex":"\\max"},
            {"asciimath":"min","tex":"\\min"},
            {"asciimath":"prod","tex":"\\prod"},
            {"asciimath":"sum","tex":"\\sum"},
        ];
        
        this.left_brackets = [
            {asciimath: 'langle', tex: '\\langle'},
            {asciimath: '(:', tex: '\\langle'},
            {asciimath: '<<', tex: '\\langle'},
            {asciimath: '{:', tex: '.'},
            {asciimath: '(', tex: '('},
            {asciimath: '[', tex: '['},
            {asciimath: '{', tex: '\\lbrace'},
            {asciimath: 'lbrace', tex: '\\lbrace'},
        ];
        this.right_brackets = [
            {asciimath: 'rangle', tex: '\\rangle'},
            {asciimath: ':)', tex: '\\rangle'},
            {asciimath: '>>', tex: '\\rangle'},
            {asciimath: ':}', tex: '.', free_tex: ':\\}'},
            {asciimath: ')', tex: ')'},
            {asciimath: ']', tex: ']'},
            {asciimath: '}', tex: '\\rbrace'},
            {asciimath: 'rbrace', tex: '\\rbrace'},
        ];
        this.leftright_brackets = [
            {asciimath: '|', left_tex: '\\lvert', right_tex: '\\rvert', free_tex: '|'},
        ];
        
        this.unary_symbols = [
            {asciimath: "sqrt", tex: "\\sqrt"},
            {asciimath: "f", tex:"f", func:true},
            {asciimath: "g", tex:"g", func:true},
            {asciimath: "sin", tex:"\\sin", func:true},
            {asciimath: "cos", tex:"\\cos", func:true},
            {asciimath: "tan", tex:"\\tan", func:true},
            {asciimath: "arcsin", tex:"\\arcsin", func:true},
            {asciimath: "arccos", tex:"\\arccos", func:true},
            {asciimath: "arctan", tex:"\\arctan", func:true},
            {asciimath: "sinh", tex:"\\sinh", func:true},
            {asciimath: "cosh", tex:"\\cosh", func:true},
            {asciimath: "tanh", tex:"\\tanh", func:true},
            {asciimath: "cot", tex:"\\cot", func:true},
            {asciimath: "coth", tex:"\\coth", func:true},
            {asciimath: "sech", tex:"\\operatorname{sech}", func:true},
            {asciimath: "csch", tex:"\\operatorname{csch}", func:true},
            {asciimath: "sec", tex:"\\sec", func:true},
            {asciimath: "csc", tex:"\\csc", func:true},
            {asciimath: "log", tex:"\\log", func:true},
            {asciimath: "ln", tex:"\\ln", func:true},
            {asciimath: "abs", rewriteleftright:["|","|"]},
            {asciimath: "norm", rewriteleftright:["\\|","\\|"]},
            {asciimath: "floor", rewriteleftright:["\\lfloor","\\rfloor"]},
            {asciimath: "ceil", rewriteleftright:["\\lceil","\\rceil"]},
            {asciimath: "Sin", tex:"\\Sin", func:true},
            {asciimath: "Cos", tex:"\\Cos", func:true},
            {asciimath: "Tan", tex:"\\Tan", func:true},
            {asciimath: "Arcsin", tex:"\\Arcsin", func:true},
            {asciimath: "Arccos", tex:"\\Arccos", func:true},
            {asciimath: "Arctan", tex:"\\Arctan", func:true},
            {asciimath: "Sinh", tex:"\\Sinh", func:true},
            {asciimath: "Cosh", tex:"\\Cosh", func:true},
            {asciimath: "Tanh", tex:"\\Tanh", func:true},
            {asciimath: "Cot", tex:"\\Cot", func:true},
            {asciimath: "Sec", tex:"\\Sec", func:true},
            {asciimath: "Csc", tex:"\\Csc", func:true},
            {asciimath: "Log", tex:"\\Log", func:true},
            {asciimath: "Ln", tex:"\\Ln", func:true},
            {asciimath: "Abs", tex:"\\Abs", rewriteleftright:["|","|"]},
            {asciimath: "det", tex:"\\det", func:true},
            {asciimath: "exp", tex:"\\exp", func:true},
            {asciimath: "gcd", tex:"\\gcd", func:true},
            {asciimath:"lcm", tex:"\\operatorname{lcm}", func:true},
            {asciimath: "cancel", tex:"\\cancel"},
            {asciimath: "Sqrt", tex:"\\Sqrt"},
            {asciimath: "hat", tex:"\\hat", acc:true},
            {asciimath:"bar", tex:"\\overline", acc:true},
            {asciimath:"overline", tex:"\\overline", acc:true},
            {asciimath: "vec", tex:"\\vec", acc:true},
            {asciimath: "tilde", tex:"\\tilde", acc:true},
            {asciimath: "dot", tex:"\\dot", acc:true},
            {asciimath: "ddot", tex:"\\ddot", acc:true},
            {asciimath:"ul", tex:"\\underline", acc:true},
            {asciimath:"underline", tex:"\\underline", acc:true},
            {asciimath:"ubrace", tex:"\\underbrace", acc:true},
            {asciimath:"underbrace", tex:"\\underbrace", acc:true},
            {asciimath:"obrace", tex:"\\overbrace", acc:true},
            {asciimath:"overbrace", tex:"\\overbrace", acc:true},
            {asciimath:"bb", atname:"mathvariant", atval:"bold", tex:"\\mathbf"},
            {asciimath: "mathbf", atname:"mathvariant", atval:"bold", tex:"mathbf"},
            {asciimath:"sf", atname:"mathvariant", atval:"sans-serif", tex:"\\mathsf"},
            {asciimath: "mathsf", atname:"mathvariant", atval:"sans-serif", tex:"mathsf"},
            {asciimath:"bbb", atname:"mathvariant", atval:"double-struck", tex:"\\mathbb"},
            {asciimath: "mathbb", atname:"mathvariant", atval:"double-struck", tex:"\\mathbb"},
            {asciimath:"cc", atname:"mathvariant", atval:"script", tex:"\\mathcal"},
            {asciimath: "mathcal", atname:"mathvariant", atval:"script", tex:"\\mathcal"},
            {asciimath:"tt", atname:"mathvariant", atval:"monospace", tex:"\\mathtt"},
            {asciimath: "mathtt", atname:"mathvariant", atval:"monospace", tex:"\\mathtt"},
            {asciimath:"fr", atname:"mathvariant", atval:"fraktur", tex:"\\mathfrak"},
            {asciimath: "mathfrak", atname:"mathvariant", atval:"fraktur", tex:"\\mathfrak"},
        ];
        
        this.binary_symbols = [
            {asciimath: "root", tex:"\\sqrt", option: true},
            {asciimath: "frac",    tex:"\\frac"},
            {asciimath: "stackrel", tex:"\\stackrel"},
            {asciimath: "overset", tex:"\\overset"},
            {asciimath: "underset", tex:"\\underset"},
            {asciimath:"color", tex: "\\color", rawfirst: true},
        ]
        
        this.non_constant_symbols = ['_','^','/'];
        
        const by_asciimath = (a,b)=>{a=a.asciimath.length,b=b.asciimath.length; return a>b ? -1 : a<b ? 1 : 0};
        this.constants.sort(by_asciimath);
        this.left_brackets.sort(by_asciimath);
        this.right_brackets.sort(by_asciimath);
        this.leftright_brackets.sort(by_asciimath);
        this.unary_symbols.sort(by_asciimath);
        this.binary_symbols.sort(by_asciimath);
    }
    
    error(message, pos) {
        const neighbourhood = this.source(pos).slice(0,5);
        throw(new Error(`Error at character ${pos} near "${neighbourhood}": ${message}`));
    }
    
    literal(token) {
        if(token) {
            return {tex: token.token, pos: token.pos, end: token.end};
        }
    }

    longest(matches) {
        matches = matches.filter(x=>!!x);
        matches.sort((x,y)=>{
            x=x.end;
            y=y.end;
            return x>y ? -1 : x<y ? 1 : 0;
        });
        return matches[0];
    }

    escape_text(str) {
        return str
            .replace(/\{/g,'\\{')
            .replace(/\}/g,'\\}')
        ;
    }
    
    input(str) {
        this._source = str;
        this.brackets = [];
    }
    
    source(pos = 0,end) {
        if(arguments.length>1) {
            return this._source.slice(pos,end);
        } else {
            return this._source.slice(pos);
        }
    }
    
    eof(pos = 0) {
        pos = this.strip_space(pos);
        return pos == this._source.length;
    }

    unbracket(tok) {
        if(!tok) {
            return;
        }
        if(!tok.bracket) {
            return tok;
        }

        const skip_brackets = ['(',')','[',']','{','}'];
        const skipleft = skip_brackets.includes(tok.left.asciimath);
        const skipright = skip_brackets.includes(tok.right.asciimath);
        const pos = skipleft ? tok.left.end : tok.pos;
        const end = skipright ? tok.right.pos : tok.end;
        let left = skipleft ? '' : tok.left.tex;
        let right = skipright ? '' : tok.right.tex;
        const middle = tok.middle ? tok.middle.tex : '';
        if(left || right) {
            left = left || '.';
            right = right || '.';
            return {tex: `\\left ${left} ${middle} \\right ${right}`, pos: tok.pos, end: tok.end};
        } else {
            return {tex: middle, pos: tok.pos, end: tok.end, middle_asciimath: this.source(pos,end)};
        }
    }
    
    parse(str) {
        this.input(str);
        let pos = 0;
        let tex = '';
        while(!this.eof(pos)) {
            let expr = this.expression(pos);
            if(!expr) {
                const rb = this.right_bracket(pos);
                if(rb) {
                    if(rb.def.free_tex) {
                        rb.tex = rb.def.free_tex;
                    }
                    expr = rb;

                }
                const lr = this.leftright_bracket(pos);
                if(lr) {
                    expr = lr;
                }
            }
            if(expr) {
                if(tex) {
                    tex += ' ';
                }
                tex += expr.tex;
                pos = expr.end;
            } else if(!this.eof(pos)) {
                throw(new Error("Didn't EOF: ",this.source(pos)));
            }
        }
        return tex;
    }
    
    strip_space(pos = 0) {
        const osource = this.source(pos);
        const reduced = osource.replace(/^(\s|\\(?!\\))*/,'');
        return pos + osource.length - reduced.length;
    }
    
    /* Does the given regex match next?
     */
    match(re, pos) {
        pos = this.strip_space(pos);
        const m = re.exec(this.source(pos));
        if(m) {
            const token = m[0];
            return {token: token, pos: pos, match: m, end: pos+token.length};
        }
    }
    
    /* Does the exact given string occur next?
     */
    exact(str, pos) {
        pos = this.strip_space(pos);
        if(this.source(pos).slice(0, str.length) == str) {
            return {token: str, pos: pos, end: pos+str.length};
        }
    }
    
    // E ::= IE | I/I                       Expression
    expression(pos = 0) {
        const negative = this.negative_expression(pos);
        if(negative) {
            return negative;
        }
        const first = this.intermediate_or_fraction(pos);
        if(!first) {
            for(let c of this.non_constant_symbols) {
                const m = this.exact(c,pos);
                if(m) {
                    return {tex: c, pos: pos, end: m.end};
                }
            }
            return;
        }
        if(this.eof(first.end)) {
            return first;
        }
        const second = this.expression(first.end);
        if(second) {
            return {tex: first.tex+' '+second.tex, pos: first.pos, end: second.end};
        } else {
            return first;
        }
    }

    negative_expression(pos = 0) {
        const dash = this.exact("-",pos);
        if(dash && !this.other_constant(pos)) {
            const s = this.expression(dash.end);
            if(s) {
                return {tex: `- ${s.tex}`, pos: pos, end: s.end}
            } else {
                return {tex: '-', pos: pos, end: dash.end};
            }
        }
    }
    
    intermediate_or_fraction(pos = 0) {
        const first = this.intermediate(pos);
        if(!first) {
            return;
        }
        let frac = this.match(/^\/(?!\/)/,first.end);
        if(frac) {
            const second = this.intermediate(frac.end);
            if(second) {
                const ufirst = this.unbracket(first);
                const usecond = this.unbracket(second);
                return {tex: `\\frac{${ufirst.tex}}{${usecond.tex}}`, pos: first.pos, end: second.end};
            } else {
                const ufirst = this.unbracket(first);
                return {tex: `\\frac{${ufirst.tex}}{}`, pos: first.pos, end: frac.end};
            }
        } else {
            return first;
        }
    }
    
    // I ::= S_S | S^S | S_S^S | S          Intermediate expression
    intermediate(pos = 0) {
        const first = this.simple(pos);
        if(!first) {
            return;
        }
        const ss = this.subsup(first.end);
        if(ss) {
            return {tex: `${first.tex}${ss.tex}`, pos:pos, end:ss.end};
        } else {
            return first;
        }
    }

    subsup(pos = 0) {
        let tex = '';
        let end = pos;
        let sub = this.exact('_',pos);
        if(sub) {
            const sub_expr = this.unbracket(this.simple(sub.end));
            if(sub_expr) {
                tex = `${tex}_{${sub_expr.tex}}`;
                end = sub_expr.end;
            } else {
                tex = `${tex}_{}`;
                end = sub.end;
            }
        }
        let sup = this.exact('^',end);
        if(sup) {
            const sup_expr = this.unbracket(this.simple(sup.end));
            if(sup_expr) {
                tex = `${tex}^{${sup_expr.tex}}`;
                end = sup_expr.end;
            } else {
                tex = `${tex}^{}`;
                end = sup.end;
            }
        }
        if(sub || sup) {
            return {tex: tex, pos: pos, end: end};
        }
    }

    // S ::= v | lEr | uS | bSS             Simple expression
    simple(pos = 0) {
        return this.longest([this.bracketed_expression(pos), this.binary(pos), this.constant(pos), this.text(pos), this.unary(pos), this.negative_simple(pos)]);
    }

    negative_simple(pos = 0) {
        const dash = this.exact("-",pos);
        if(dash && !this.other_constant(pos)) {
            const s = this.simple(dash.end);
            if(s) {
                return {tex: `- ${s.tex}`, pos: pos, end: s.end}
            } else {
                return {tex: '-', pos: pos, end: dash.end};
            }
        }
    }
    
    bracketed_expression(pos = 0) {
        const l = this.left_bracket(pos);
        if(l) {
            const middle = this.expression(l.end);
            if(middle) {
                const r = this.right_bracket(middle.end);
                if(r) {
                    return {tex: `\\left${l.tex} ${middle.tex} \\right ${r.tex}`, pos: pos, end: r.end, bracket: true, left: l, right: r, middle: middle};
                } else if(this.eof(middle.end)) {
                    return {tex: `\\left${l.tex} ${middle.tex} \\right.`, pos: pos, end: middle.end};
                } else {
                    return {tex: `${l.tex} ${middle.tex}`, pos: pos, end: middle.end};
                }
            } else {
                const r = this.right_bracket(l.end);
                if(r) {
                    return {tex: `\\left ${l.tex} \\right ${r.tex}`, pos: pos, end: r.end, bracket: true, left: l, right: r, middle: undefined};
                } else {
                    return {tex: l.tex, pos: pos, end: l.end};
                }
            }
        }
        if(this.other_constant(pos)) {
            return;
        }
        const left = this.leftright_bracket(pos, 'left');
        if(left) {
            const middle = this.expression(left.end);
            if(middle) {
                const right = this.leftright_bracket(middle.end, 'right');
                if(right) {
                    return {tex: `\\left ${left.tex} ${middle.tex} \\right ${right.tex}`, pos: pos, end: right.end, bracket: true, left: left, right: right, middle: middle};
                } else {
                    return {tex: `\\left ${left.tex} ${middle.tex} \\right.`, pos: pos, end: middle.end};
                }
            }
        }
    }
    
    // r ::= ) | ] | } | :) | :} | other right brackets
    right_bracket(pos = 0) {
        for(let bracket of this.right_brackets) {
            const m = this.exact(bracket.asciimath,pos);
            if(m) {
                return {tex: bracket.tex, pos: pos, end: m.end, asciimath: bracket.asciimath, def: bracket};
            }
        }
    }
    
    // l ::= ( | [ | { | (: | {: | other left brackets
    left_bracket(pos = 0) {
        for(let bracket of this.left_brackets) {
            const m = this.exact(bracket.asciimath,pos);
            if(m) {
                return {tex: bracket.tex, pos: pos, end: m.end, asciimath: bracket.asciimath};
            }
        }
    }

    leftright_bracket(pos = 0,position) {
        for(let lr of this.leftright_brackets) {
            const b = this.exact(lr.asciimath, pos);
            if(b) {
                return {tex: position=='left' ? lr.left_tex : position=='right' ? lr.right_tex : lr.free_tex, pos: pos, end: b.end};
            }
        }
    }

    text(pos = 0) {
        const quoted = this.match(/^"([^"]*)"/,pos);
        if(quoted) {
            const text = this.escape_text(quoted.match[1]);
            return {tex: `\\text{${text}}`, pos: pos, end: quoted.end};
        }
        const textfn = this.match(/^(?:mbox|text)\s*(\([^)]*\)?|\{[^}]*\}?|\[[^\]]*\]?)/,pos);
        if(textfn) {
            const text = this.escape_text(textfn.match[1].slice(1,textfn.match[1].length-1));
            return {tex: `\\text{${text}}`, pos: pos, end: textfn.end};
        }
    }

    // b ::= frac | root | stackrel | other binary symbols
    binary(pos = 0) {
        for(let binary of this.binary_symbols) {
            const m = this.exact(binary.asciimath, pos);
            const [lb1,rb1] = binary.option ? ['[',']'] : ['{','}'];
            if(m) {
                const a = this.unbracket(this.simple(m.end));
                if(a) {
                    const atex = binary.rawfirst ? a.middle_asciimath : a.tex;
                    const b = this.unbracket(this.simple(a.end));
                    if(b) {
                        return {tex: `${binary.tex}${lb1}${atex}${rb1}{${b.tex}}`, pos: pos, end: b.end};
                    } else {
                        return {tex: `${binary.tex}${lb1}${atex}${rb1}{}`, pos: pos, end: a.end};
                    }
                } else {
                    return {tex: `${binary.tex}${lb1}${rb1}{}`, pos: pos, end: m.end};
                }
            }
        }
    }

    // u ::= sqrt | text | bb | other unary symbols for font commands
    unary(pos = 0) {
        for(let u of this.unary_symbols) {
            const m = this.exact(u.asciimath, pos);
            if(m) {
                const ss = this.subsup(m.end);
                const sstex = ss ? ss.tex : '';
                const end = ss ? ss.end : m.end;
                const barg = this.simple(end);
                const arg = u.func ? barg : this.unbracket(barg);
                const argtex = arg && (u.raw ? arg.middle_asciimath : arg.tex);
                if(u.rewriteleftright) {
                    const [left,right] = u.rewriteleftright;
                    if(arg) {
                        return {tex: `\\left ${left} ${argtex} \\right ${right} ${sstex}`, pos: pos, end: arg.end};
                    } else {
                        return {tex: `\\left ${left} \\right ${right} ${sstex}`, pos: pos, end: m.end};
                    }
                } else {
                    if(arg) {
                        return {tex: `${u.tex}${sstex}{${argtex}}`, pos: pos, end: arg.end};
                    } else {
                        return {tex: `${u.tex}${sstex}{}`, pos: pos, end: m.end};
                    }
                }
            }
        }
    }

    // v ::= [A-Za-z] | greek letters | numbers | other constant symbols
    constant(pos = 0) {
        if(this.right_bracket(pos)) {
            return;
        }
        return this.longest([this.other_constant(pos), this.greek(pos), this.name(pos), this.number(pos), this.arbitrary_constant(pos)]);
    }
    
    name(pos = 0) {
        return this.literal(this.match(/^[A-Za-z]/, pos));
    }
    
    greek(pos = 0) {
        const re_greek = new RegExp('^('+this.greek_letters.join('|')+')');
        const m = this.match(re_greek, pos);
        if(m) {
            return {tex: '\\'+m.token, pos: pos, end: m.end};
        }
    }
    
    number(pos = 0) {
        const re_number = new RegExp('^\\d+('+this.decimalsign+'\\d+)?');
        return this.literal(this.match(re_number, pos));
    }

    other_constant(pos = 0) {
        for(let sym of this.constants) {
            let m = this.exact(sym.asciimath, pos);
            if(m) {
                return {tex: `${sym.tex}`, pos: m.pos, end: m.end};
            }
        }
    }
    
    arbitrary_constant(pos = 0) {
        if(!this.eof(pos)) {
            for(let nc of this.non_constant_symbols.concat(this.left_brackets.map(x=>x.asciimath), this.right_brackets.map(x=>x.asciimath), this.leftright_brackets.map(x=>x.asciimath))) {
                if(this.exact(nc, pos)) {
                    return;
                }
            }
            const spos = this.strip_space(pos);
            const symbol = this.source(spos).slice(0,1);
            return {tex: symbol, pos: pos, end: spos+1};
        }
    }
}
