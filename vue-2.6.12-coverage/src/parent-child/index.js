import './button-counter.js';

Vue.component('parent-child', {
  data() {
    return {
      eventMsgs: [],
      counter: 5,
      buttonCounter: 'show',
    };
  },
  methods: {
    onEventMsg(id, msg) {
      this.eventMsgs.push({ id, msg });
    },
  },
  template: `
    <div>
      <div id="parent-child">
        <h2>Parent-Child Components</h2>
        <span>
          <input
            id="show-button-counter"
            v-model="buttonCounter"
            name="button-counter"
            type="radio"
            value="show"
          />
          <label for="show-button-counter">Show</label>
          <input
            id="hide-button-counter"
            v-model="buttonCounter"
            name="button-counter"
            type="radio"
            value="hide"
          />
          <label for="hide-button-counter">Hide</label>
        </span>
        <transition name="fade">
          <keep-alive>
            <button-counter
              :initial-counter="counter"
              :increment-value="1"
              @event-msg="onEventMsg('keep-alive-counter',$event)"
              v-if="buttonCounter=='show'"
            ></button-counter>
          </keep-alive>
        </transition>
        <transition>
          <button-counter
            :initial-counter="counter"
            :increment-value="2"
            @event-msg="onEventMsg('regular-counter',$event)"
            v-if="buttonCounter=='show'"
            #fff
          ></button-counter>
        </transition>
      </div>
      <div id="lifecycle-events">
        <container>
          <template v-slot:header>Events Table</template>
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Keep-alive</th>
                <th>Regular</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({id, msg}, index) in eventMsgs" :comp="id">
                <td class="index">{{index}}</td>
                <td class="comp1">
                  {{id == 'keep-alive-counter'? msg: '&nbsp;'}}
                </td>
                <td class="comp2">
                  {{id == 'regular-counter'? msg: '&nbsp;'}}
                </td>
              </tr>
            </tbody>
          </table>
        </container>
      </div>    
    </div>
  `,
});
