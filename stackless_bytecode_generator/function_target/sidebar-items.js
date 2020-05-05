initSidebarItems({"struct":[["FunctionTarget","A FunctionTarget is a drop-in replacement for a FunctionEnv which allows to rewrite and analyze bytecode and parameter/local types. It encapsulates a FunctionEnv and information which can be rewritten using the `FunctionTargetsHolder` data structure."],["FunctionTargetData","Holds the owned data belonging to a FunctionTarget, which can be rewritten using the `FunctionTargetsHolder::rewrite` method."]],"type":[["AnnotationFormatter","A function which is called to display the value of an annotation for a given function target at the given code offset. The function is passed the function target and the code offset, and is expected to pick the annotation of its respective type from the function target and for the given code offset. It should return None if there is no relevant annotation."]]});