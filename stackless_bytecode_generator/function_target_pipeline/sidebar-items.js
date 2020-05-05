initSidebarItems({"struct":[["FunctionTargetPipeline","A processing pipeline for function targets."],["FunctionTargetsHolder","A data structure which holds data for multiple function targets, and allows to manipulate them as part of a transformation pipeline."]],"trait":[["FunctionTargetProcessor","A trait for processing a function target. Takes as parameter a target holder which can be mutated, the env of the function being processed, and the target data. During the time the processor is called, the target data is removed from the holder, and added back once transformation has finished. This allows the processor to take ownership on the target data. Notice that you can use `FunctionTarget{func_env, &data}` to temporarily construct a function target for access to the underlying data."]]});