
/*
 * CODE IDE — Scratch Extension Starter
 * Adds a Code IDE category with 20 language choices.
 */

(function (Scratch) {
    'use strict';

    if (!Scratch || !Scratch.extensions || !Scratch.extensions.unsandboxed) {
        throw new Error('Code IDE requires an unsandboxed Scratch extension.');
    }

    const LANGUAGES = [
        'Python',
        'JavaScript',
        'Java',
        'C++',
        'C#',
        'TypeScript',
        'C',
        'SQL',
        'Go',
        'Rust',
        'PHP',
        'Swift',
        'Kotlin',
        'R',
        'Ruby',
        'MATLAB',
        'Bash / Shell',
        'Julia',
        'Fortran',
        'COBOL'
    ];

    class CodeIDE {
        constructor() {
            this.language = 'Python';
            this.code = '';
            this.output = '';
            this.error = '';
        }

        getInfo() {
            return {
                id: 'codeide',
                name: 'Code IDE',
                color1: '#3457D5',
                color2: '#2443AD',
                color3: '#19358F',

                blocks: [
                    {
                        opcode: 'selectLanguage',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'select language [LANGUAGE]',
                        arguments: {
                            LANGUAGE: {
                                type: Scratch.ArgumentType.STRING,
                                menu: 'languages'
                            }
                        }
                    },
                    {
                        opcode: 'setCode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'store code [CODE]',
                        arguments: {
                            CODE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'print("Hello World!")'
                            }
                        }
                    },
                    {
                        opcode: 'clearCode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'clear stored code'
                    },
                    {
                        opcode: 'getCode',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'stored code'
                    },
                    {
                        opcode: 'getLanguage',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'selected language'
                    },
                    {
                        opcode: 'getOutput',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'IDE output'
                    },
                    {
                        opcode: 'getError',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'IDE error'
                    },
                    {
                        opcode: 'runCode',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'run stored code'
                    }
                ],

                menus: {
                    languages: {
                        acceptReporters: false,
                        items: LANGUAGES
                    }
                }
            };
        }

        selectLanguage(args) {
            this.language = String(args.LANGUAGE);
            this.output = 'Selected language: ' + this.language;
            this.error = '';
        }

        setCode(args) {
            this.code = String(args.CODE);
            this.output = 'Code stored successfully.';
            this.error = '';
        }

        clearCode() {
            this.code = '';
            this.output = 'Code cleared.';
            this.error = '';
        }

        getCode() {
            return this.code;
        }

        getLanguage() {
            return this.language;
        }

        getOutput() {
            return this.output;
        }

        getError() {
            return this.error;
        }

        runCode() {
            if (!this.code.trim()) {
                this.error = 'No code stored.';
                return;
            }

            this.error =
                'Runtime not connected yet for ' + this.language +
                '. A secure compiler/interpreter service is needed.';
        }
    }

    Scratch.extensions.register(new CodeIDE());

})(Scratch);
