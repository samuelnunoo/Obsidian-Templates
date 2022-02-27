const methodPath = "docMeta/Tables/Methods"
const commandName = "Create Method"

async function createMethod({quickAddApi}) {
    const componentName = app.workspace.activeLeaf.view.file.basename
    const folderPath = methodPath + "/" + componentName 
    const partialTemplate = {
        folder: {
            enabled:true,
            folders:[folderPath],
            chooseWhenCreatingNote:false,
            createInSameFolderAsActiveFile:false
        }
    }

    quickAddApi.executeChoice(commandName,null,partialTemplate)
}



module.exports = createMethod