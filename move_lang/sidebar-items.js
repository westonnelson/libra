initSidebarItems({"fn":[["is_permitted_char","Determine if a character is permitted character."],["is_permitted_newline_char","Determine if a character is a permitted newline character."],["is_permitted_printable_char","Determine if a character is an allowed eye-visible (printable) character."],["move_check","Given a set of targets and a set of dependencies - Checks the targets with the dependencies (targets can be dependencies of other targets) Does not run compile to Move bytecode Very large programs might fail on compilation even though they have been checked due to size   limitations of the Move bytecode"],["move_check_no_report","Move check but it returns the errors instead of reporting them to stderr"],["move_compile","Given a set of targets and a set of dependencies - Checks the targets with the dependencies (targets can be dependencies of other targets) - Compiles the targets to Move bytecode Does not run the Move bytecode verifier on the compiled targets, as the Move front end should   be more restrictive"],["move_compile_no_report","Move compile but it returns the errors instead of reporting them to stderr"],["move_compile_to_expansion_no_report","Move compile up to expansion phase, returning errors instead of reporting them to stderr"],["output_compiled_units","Given a file map and a set of compiled programs, saves the compiled programs to disk"],["sanity_check_compiled_units","Runs the bytecode verifier on the compiled units Fails if the bytecode verifier errors"]],"mod":[["cfgir",""],["command_line",""],["compiled_unit",""],["errors",""],["expansion",""],["hlir",""],["ir_translation",""],["naming",""],["parser",""],["shared",""],["test_utils",""],["typing",""]]});