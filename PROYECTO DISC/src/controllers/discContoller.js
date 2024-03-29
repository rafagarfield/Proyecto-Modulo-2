module.exports={
    getDisc: (req,res) =>{
        res.status(200).send("tamos en ruta get disc")
    },
    postDisc: (req,res) =>{
        res.status(200).send("tamos en ruta post disc")
    },
    putDisc: (req,res) =>{
        res.status(200).send("tamos en ruta put disc")
    },
    deleteDisc: (req,res) =>{
        res.status(200).send("tamos en ruta delete disc")
    }
}
