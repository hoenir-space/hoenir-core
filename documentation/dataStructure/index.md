# Data Structure

## Motivation

The data structure is meant to be flexible and allow for several analytics use cases.


## Graph Structures

Most high level types are organised by ideas based in [graph theory](https://en.wikipedia.org/wiki/Graph_theory).
Based on 'graphs', 'vertices' and 'edges' the schema adds 'weights' and 'properties' on top level to allow certain mechanisms through out the data.

Principles:
* A 'weight' MUST only be connected to 'edges' and 'vertices'
* A 'properties' MUST only be connected to 'vertices'.
* An 'edges' MUST be directed (= poiting from one 'vertex' to one other 'vertex'). If be-directionality is required two 'edges' must be created. 
* The value of 'weights' SHOULD range from 0.0 (=lowest) to 1.0 (=highest). The default value SHOULD be 1.0.

