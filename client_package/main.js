'use strict';

jcmp.events.AddRemoteCallable('set_player_ability', function (ability, state) {
  jcmp.localPlayer.SetAbilityEnabled(ability, state);
});