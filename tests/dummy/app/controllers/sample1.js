import Ember from 'ember';

export default Ember.Controller.extend({

  data: {
    "vertices": [
      {
        "vertexName": "Map 4",
        "processorClass": "org.apache.hadoop.hive.ql.exec.tez.MapTezProcessor",
        "outEdgeIds": [
          "221296172"
        ],
        "additionalInputs": [
          {
            "name": "date_dim",
            "class": "org.apache.tez.mapreduce.input.MRInputLegacy",
            "initializer": "org.apache.hadoop.hive.ql.exec.tez.HiveSplitGenerator"
          }
        ],
        "data": {
          "name": "Map 4",
          "entityID": "vertex_1455662455106_2568_2_00",
          "status": "SUCCEEDED",
          "progress": 1,
          "startTime": 1457390194551,
          "endTime": 1457390196867,
          "duration": 2316,
          "firstTaskStartTime": 1457390195169,
          "totalTasks": 1,
          "succeededTasks": 1,
          "runningTasks": null,
          "pendingTasks": null,
          "processorClassName": "MapTezProcessor"
        }
      },
      {
        "vertexName": "Map 3",
        "processorClass": "org.apache.hadoop.hive.ql.exec.tez.MapTezProcessor",
        "outEdgeIds": [
          "1485979544"
        ],
        "additionalInputs": [
          {
            "name": "item",
            "class": "org.apache.tez.mapreduce.input.MRInputLegacy",
            "initializer": "org.apache.hadoop.hive.ql.exec.tez.HiveSplitGenerator"
          }
        ],
        "data": {
          "name": "Map 3",
          "entityID": "vertex_1455662455106_2568_2_01",
          "status": "SUCCEEDED",
          "progress": 1,
          "startTime": 1457390194623,
          "endTime": 1457390198964,
          "duration": 4341,
          "firstTaskStartTime": 1457390195222,
          "totalTasks": 3,
          "succeededTasks": 3,
          "runningTasks": null,
          "pendingTasks": null,
          "processorClassName": "MapTezProcessor"
        }
      },
      {
        "vertexName": "Map 1",
        "processorClass": "org.apache.hadoop.hive.ql.exec.tez.MapTezProcessor",
        "inEdgeIds": [
          "221296172",
          "1485979544"
        ],
        "outEdgeIds": [
          "1820506493"
        ],
        "additionalInputs": [
          {
            "name": "store_sales",
            "class": "org.apache.tez.mapreduce.input.MRInputLegacy",
            "initializer": "org.apache.hadoop.hive.ql.exec.tez.HiveSplitGenerator"
          }
        ],
        "data": {
          "name": "Map 1",
          "entityID": "vertex_1455662455106_2568_2_02",
          "status": "SUCCEEDED",
          "progress": 1,
          "startTime": 1457390197861,
          "endTime": 1457390251181,
          "duration": 53320,
          "firstTaskStartTime": 1457390198298,
          "totalTasks": 809,
          "succeededTasks": 809,
          "runningTasks": null,
          "pendingTasks": null,
          "processorClassName": "MapTezProcessor"
        }
      },
      {
        "vertexName": "Reducer 2",
        "processorClass": "org.apache.hadoop.hive.ql.exec.tez.ReduceTezProcessor",
        "inEdgeIds": [
          "1820506493"
        ],
        "additionalOutputs": [
          {
            "name": "out_Reducer 2",
            "class": "org.apache.tez.mapreduce.output.MROutput"
          }
        ],
        "vertexManagerPluginClass": "org.apache.tez.dag.library.vertexmanager.ShuffleVertexManager",
        "data": {
          "name": "Reducer 2",
          "entityID": "vertex_1455662455106_2568_2_03",
          "status": "SUCCEEDED",
          "progress": 1,
          "startTime": 1457390197862,
          "endTime": 1457390251913,
          "duration": 54051,
          "firstTaskStartTime": 1457390245981,
          "totalTasks": 1,
          "succeededTasks": 1,
          "runningTasks": null,
          "pendingTasks": null,
          "processorClassName": "ReduceTezProcessor"
        }
      }
    ],
    "edges": [
      {
        "edgeId": "221296172",
        "inputVertexName": "Map 4",
        "outputVertexName": "Map 1",
        "dataMovementType": "BROADCAST",
        "dataSourceType": "PERSISTED",
        "schedulingType": "SEQUENTIAL",
        "edgeSourceClass": "org.apache.tez.runtime.library.output.UnorderedKVOutput",
        "edgeDestinationClass": "org.apache.tez.runtime.library.input.UnorderedKVInput"
      },
      {
        "edgeId": "1485979544",
        "inputVertexName": "Map 3",
        "outputVertexName": "Map 1",
        "dataMovementType": "BROADCAST",
        "dataSourceType": "PERSISTED",
        "schedulingType": "SEQUENTIAL",
        "edgeSourceClass": "org.apache.tez.runtime.library.output.UnorderedKVOutput",
        "edgeDestinationClass": "org.apache.tez.runtime.library.input.UnorderedKVInput"
      },
      {
        "edgeId": "1820506493",
        "inputVertexName": "Map 1",
        "outputVertexName": "Reducer 2",
        "dataMovementType": "SCATTER_GATHER",
        "dataSourceType": "PERSISTED",
        "schedulingType": "SEQUENTIAL",
        "edgeSourceClass": "org.apache.tez.runtime.library.output.OrderedPartitionedKVOutput",
        "edgeDestinationClass": "org.apache.tez.runtime.library.input.OrderedGroupedKVInput"
      }
    ]
  }

});
