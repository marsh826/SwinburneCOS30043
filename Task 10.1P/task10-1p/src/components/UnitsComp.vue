<template>
    <h1>{{msg}}</h1>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Unit Code</th>
                    <th>Unit Description</th>
                    <th>Credit Points</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="unit in units" :key="unit.desc">
                    <td>{{ unit.code }}</td>
                    <td>{{ unit.desc }}</td>
                    <td>{{ unit.cp }}</td>
                    <td>{{ unit.type }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Units from '../assets/units.json';

export default {
  name: 'UnitsComp',
  props: {
    msg: String
  },
  data: function() {
    return {
        units:Units
    }
  }
}
</script>